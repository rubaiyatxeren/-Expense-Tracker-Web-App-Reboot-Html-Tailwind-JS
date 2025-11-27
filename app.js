let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function handleAddTransaction(event) {
  event.preventDefault();

  const description = document.getElementById("description").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  const transaction = {
    id: Date.now(),
    description,
    amount: type === "income" ? amount : -amount,
    type,
    date: new Date().toLocaleDateString(),
  };
  console.log(transactions);

  transactions.push(transaction);

  saveTransactions();
  updateUI();

  // Reset form
  event.target.reset();
}

function calculateTotals() {
  let income = 0,
    expense = 0;

  transactions.forEach((t) => {
    t.type === "income"
      ? (income += t.amount)
      : (expense += Math.abs(t.amount));
  });

  return {
    balance: income - expense,
    income,
    expense,
  };
}

function updateUI() {
  const { balance, income, expense } = calculateTotals();

  setText("totalBalance", `$${balance.toFixed(2)}`);
  setText("totalIncome", `$${income.toFixed(2)}`);
  setText("totalExpenses", `$${expense.toFixed(2)}`);

  const transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = transactions.length
    ? transactions.slice().reverse().map(createTransactionItem).join("")
    : `<div class="text-gray-500 text-center py-4">No transactions yet</div>`;
}

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function createTransactionItem(t) {
  const color = t.type === "income" ? "text-green-600" : "text-red-600";
  const sign = t.type === "income" ? "+" : "-";

  return `
    <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg border shadow">
        <div class="flex-1">
            <p class="font-semibold text-gray-800">${t.description}</p>
            <p class="text-sm text-gray-500">${t.date}</p>
        </div>

        <div class="flex items-center gap-3">
            <span class="font-semibold ${color}">${sign}$${Math.abs(
    t.amount
  ).toFixed(2)}</span>
            <button onclick="handleDeleteTransaction(${t.id})"
             class="text-red-500 hover:text-red-700 transition-colors">x</button>
        </div>
    </div>
  `;
}

function handleDeleteTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  saveTransactions();
  updateUI();
}

function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}
updateUI();
