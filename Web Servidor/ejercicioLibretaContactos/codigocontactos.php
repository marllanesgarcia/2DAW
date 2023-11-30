<?php
session_start();

if (!isset($_SESSION['contacts'])) {
    $_SESSION['contacts'] = array();
}

function addContact($name, $address, $phone, $email) {
    $contact = array(
        'name' => $name,
        'address' => $address,
        'phone' => $phone,
        'email' => $email
    );

    $_SESSION['contacts'][] = $contact;
}

function editContact($index, $name, $address, $phone, $email) {
    if (isset($_SESSION['contacts'][$index])) {
        $_SESSION['contacts'][$index] = array(
            'name' => $name,
            'address' => $address,
            'phone' => $phone,
            'email' => $email
        );
    }
}

function deleteContact($index) {
    if (isset($_SESSION['contacts'][$index])) {
        unset($_SESSION['contacts'][$index]);
        $_SESSION['contacts'] = array_values($_SESSION['contacts']);
    }
}
?>
