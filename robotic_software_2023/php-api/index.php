<?php
$servername = "127.0.0.1";
$username = "jojox";
$password = "grc";
$dbname = "robotcomp";
$port = 3306;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function getUsers($request, $response) {
    global $conn;
    $sql = "SELECT * FROM teams";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $rows = array();
        while($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
        $response->json($rows);
    } else {
        $response->json(array());
    }
}

function getUseAmountOfMoneyrById($request, $response) {
    global $conn;
    $id = $request->params['id'];
    $sql = "SELECT amountofmoney FROM teams WHERE ID='" . ($id + 1) . "'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $response->json($row);
    } else {
        $response->json(array());
    }
}

function getCurrentTeams($request, $response) {
    global $conn;
    $sql = "SELECT * FROM currentround";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $rows = array();
        while($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
        $response->json($rows);
    } else {
        $response->json(array());
    }
}

function getCurrentTeamsById($request, $response) {
    global $conn;
    $id = intval($request->params['id']);
    $sql = "SELECT * FROM currentround WHERE id=" . $id;
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $response->json($row);
    } else {
        $response->json(array());
    }
}

function changeTeam($request, $response) {
    global $connection;
    $data = json_decode(file_get_contents('php://input'));
    $displayID = $data->displayID;
    $newTeam = $data->newTeam;
    $finalAmountOfPoints = $data->finalAmountOfPoints;
    $currentTeam = $data->currentTeam;
    $id = intval($request->getAttribute('id'));

    $updateTeamQuery = "UPDATE teams SET amountofpoints=amountofpoints+$finalAmountOfPoints WHERE teamname='$currentTeam'";
    $result = mysqli_query($connection, $updateTeamQuery);
    if ($result) {
        $response->getBody()->write("added points to the teams table");
    } else {
        throw new Exception(mysqli_error($connection));
    }

    $updateDisplayQuery = "UPDATE currentround SET teamname='$newTeam', amountofpoints=0 WHERE id=$displayID+1";
    $result = mysqli_query($connection, $updateDisplayQuery);
    if ($result) {
        $response->getBody()->write("done update teamDisplay");
    } else {
        throw new Exception(mysqli_error($connection));
    }
}


function changeScore($request, $response) {
    global $connection;
    $newScore = $request['body']['newScore'];
    $id = (int) $request['params']['id'];

    if ($newScore < 0) {
        throw new Exception("cannot have negative points");
    }

    $query = "UPDATE currentround SET amountofpoints = $newScore WHERE id=" . ($id + 1);
    if (!mysqli_query($connection, $query)) {
        throw new Exception(mysqli_error($connection));
    }

    $response->status(200)->end("done update scores");
}

function purchaseItem($request, $response) {
    global $conn;
    $teamname = $request->getBody()['teamname'];
    $itemname = $request->getBody()['itemname'];
    $amount = $request->getBody()['amount'];
    $price = $request->getBody()['price'];
    $maxPerTeam = 0;

    $sql = "INSERT INTO purchases (teamname, itemname, amount, price) VALUES ('$teamname', '$itemname', '$amount', '$price * $amount')";
    if ($conn->query($sql) === TRUE) {
      $response->withStatus(200)->getBody()->write("inserted purchase into DB");
    } else {
      throw new Exception($conn->error);
    }

    $sql = "UPDATE teams SET amountofmoney=amountofmoney-'$price * $amount' WHERE teamname='$teamname'";
    if ($conn->query($sql) === TRUE) {
      $response->withStatus(200)->getBody()->write("updated teams");
    } else {
      throw new Exception($conn->error);
    }
}

function refundItem($request, $response) {
    global $conn;
    $teamname = $request->getBody()['teamname'];
    $itemname = $request->getBody()['itemname'];
    $amount = $request->getBody()['amount'];
    $price = $request->getBody()['price'];
    $maxPerTeam = 0;

    $sql = "INSERT INTO refunds (teamname, itemname, amount, price) VALUES ('$teamname', '$itemname', '$amount', '$price')";
    if ($conn->query($sql) === TRUE) {
      $response->withStatus(200)->getBody()->write("added into refunds");
    } else {
      throw new Exception($conn->error);
    }

    $sql = "UPDATE teams SET amountofmoney=amountofmoney+'$price * $amount * 0.5' WHERE teamname='$teamname'";
    if ($conn->query($sql) === TRUE) {
      $response->withStatus(200)->getBody()->write("refunded money *0.5");
    } else {
      throw new Exception($conn->error);
    }
}

function getItemData($request, $response) {
    global $conn;
    $id = (int) $request->getAttribute('id');
    $sql = "SELECT * FROM items WHERE ID='" . ($id + 1) . "'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
      $data = array();
      while($row = $result->fetch_assoc()) {
        $data[] = $row;
      }
      $response->withStatus(200)->getBody()->write(json_encode($data));
    } else {
      throw new Exception("No results found");
    }
}

function getAllItems($request, $response) {
  global $connection;

  $query = "SELECT * FROM items";
  $result = mysqli_query($connection, $query);

  if (!$result) {
    throw new Exception(mysqli_error($connection));
  }

  $items = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $items[] = $row;
  }

  $response->status(200)->json($items);
}

function getTeamByPassword($request, $response) {
  global $connection;

  $password = $request->getAttribute('id');

  $query = "SELECT ID from teams WHERE password='$password'";
  $result = mysqli_query($connection, $query);

  if (!$result) {
    throw new Exception(mysqli_error($connection));
  }

  $row = mysqli_fetch_assoc($result);

  $response->status(200)->json($row);
}

$db = require('./queries');
$cors = require('cors');

$app = require('express')();
$http = require('http');

$server = $http->createServer($app);

$server->listen(5000, function() {
    echo "Server is running on port 5000";
});

$app->get('/users/', $db->getUsers);
$app->get('/usersMoney/:id', $db->getUserById);
$app->get('/currentround/', $db->getCurrentTeams);
$app->get('/currentround/:id', $db->getCurrentTeamsById);
$app->get('/items/', $db->getAllItems);
$app->get('/items/:id', $db->getItemData);
$app->get('/teamidByPwd/:id', $db->getTeamByPassword);

$app->put('/currentround/teams/:id', $db->changeTeam);
$app->put('/currentround/scores/:id', $db->changeScore);

$app->post('/purchase/', $db->purchaseItem);
$app->post('/refund/', $db->refundItem);
?>