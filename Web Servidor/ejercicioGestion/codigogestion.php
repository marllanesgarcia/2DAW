<?php
session_start();

class BudgetManager {
    private $categories;

    public function __construct() {
        if (!isset($_SESSION['categories'])) {
            $_SESSION['categories'] = array();
        }

        $this->categories = &$_SESSION['categories'];
    }

    public function addExpense($category, $amount) {
        if (!isset($this->categories[$category])) {
            $this->categories[$category] = 0;
        }

        $this->categories[$category] += $amount;
    }

    public function getExpenseByCategory($category) {
        return isset($this->categories[$category]) ? $this->categories[$category] : 0;
    }

    public function getTotalExpense() {
        return array_sum($this->categories);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $budgetManager = new BudgetManager();

    // Obtener datos del formulario
    $category = $_POST['category'];
    $amount = (float)$_POST['amount'];

    // Agregar gastos
    $budgetManager->addExpense($category, $amount);
}


echo "Gasto en Alimentación: $" . $budgetManager->getExpenseByCategory('Alimentación');
echo "Gasto en Transporte: $" . $budgetManager->getExpenseByCategory('Transporte');
echo "Gasto en Ocio: $" . $budgetManager->getExpenseByCategory('Ocio');

echo "Gasto Mensual Total: $" . $budgetManager->getTotalExpense();
?>
