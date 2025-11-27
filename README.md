# 💸 Expense Tracker Web App

A simple and elegant personal finance tracker built with vanilla JavaScript and Tailwind CSS. Track your income and expenses with a beautiful, responsive interface.

![Expense Tracker](https://img.shields.io/badge/Version-1.0.0-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 💰 **Track Income & Expenses** - Add transactions with descriptions and amounts
- 📊 **Real-time Balance Calculation** - Automatic total balance, income, and expense calculations
- 💾 **Local Storage** - Your data persists even after closing the browser
- 🎨 **Beautiful UI** - Clean, modern design with Tailwind CSS
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🗑️ **Delete Transactions** - Remove transactions with one click
- 🔄 **Live Updates** - Instant UI updates when adding or deleting transactions



## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rubaiyatxeren/Expense-Tracker-Web-App-Reboot-Html-Tailwind-JS.git
   cd expense-tracker
   ```

2. **Open the project**
   - Simply open `index.html` in your browser, or
   - Use a local server for better development experience

3. **Start tracking!**
   - No additional setup required - it works out of the box!

## 🎯 How to Use

### Adding a Transaction
1. Enter a description (e.g., "Groceries", "Salary")
2. Enter the amount
3. Select transaction type (Income or Expense)
4. Click "Add Transaction"

### Viewing Transactions
- See all transactions in the "Transaction History" section
- Newest transactions appear at the top
- Green amounts indicate income, red amounts indicate expenses

### Deleting a Transaction
- Click the "×" button next to any transaction to remove it


## 🧩 Code Overview

### Main Functions

- **`handleAddTransaction()`** - Adds new transactions
- **`calculateTotals()`** - Calculates balance, income, and expenses
- **`updateUI()`** - Updates the user interface
- **`handleDeleteTransaction()`** - Removes transactions
- **`saveTransactions()`** - Saves data to localStorage

### Data Structure
```javascript
{
  id: 123456789,
  description: "Groceries",
  amount: -50.00,     // Negative for expenses
  type: "expense",    // "income" or "expense"
  date: "10/30/2023"
}
```

## 🛡️ Data Persistence

All your transactions are automatically saved to your browser's local storage. Your data will remain available even if you:
- Close the browser
- Refresh the page
- Restart your computer

## 🎨 Customization

### Styling
The app uses Tailwind CSS. You can customize the appearance by:
- Modifying classes in `index.html`
- Updating the color scheme in the transaction items
- Changing the layout in the grid sections

### Adding Features
Some ideas for enhancements:
- Transaction categories
- Date filtering
- Data export
- Charts and graphs
- Monthly budgeting

## 🌐 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 🐛 Troubleshooting

### Common Issues

1. **Transactions not saving?**
   - Ensure JavaScript is enabled in your browser
   - Check browser console for errors

2. **UI not updating?**
   - Refresh the page
   - Clear browser cache if needed

3. **Data lost?**
   - Check if you cleared browser data
   - Verify localStorage is enabled

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Setup
```bash
# Install Live Server (optional)
npm install -g live-server

# Run with Live Server
live-server
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with vanilla JavaScript (no frameworks required)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from Twemoji
- Inspired by modern financial apps

## 📞 Support

If you have any questions or issues, please open an issue on GitHub.

---

**Happy Budgeting!** 💰✨

---

*⭐ Don't forget to star this repo if you find it helpful!*
