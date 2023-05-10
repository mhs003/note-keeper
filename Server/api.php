<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$data_file = __DIR__.'/notes_data.json';

if (!file_exists($data_file)) {
    touch($data_file);
}

if (isset($_GET['get_notes'])){
  $file = fopen($data_file, 'r');
  echo fread($file, filesize($data_file));
  fclose($file);
  exit;
}

if (isset($_POST['title']) && isset($_POST['content'])){
  $new_note = ['title' => $_POST['title'], 'content' => $_POST['content']];

  $file1 = fopen($data_file, 'r');
  $old_notes = json_decode(fread($file1, filesize($data_file)), true);
  $new_notes = json_encode([$new_note, ...$old_notes]);
  fclose($file1);

  $file2 = fopen($data_file, 'w');
  fwrite($file2, $new_notes);
  fclose($file2);
  exit;
}

if (isset($_POST['delete_id'])){
  $file1 = fopen($data_file, 'r');
  $old_notes = json_decode(fread($file1, filesize($data_file)), true);
  array_splice($old_notes, (int) $_POST['delete_id'], 1);
  $new_notes = json_encode($old_notes);
  fclose($file1);

  $file2 = fopen($data_file, 'w');
  fwrite($file2, $new_notes);
  fclose($file2);
  exit;
}

echo "{'Request not allowed!'}";
