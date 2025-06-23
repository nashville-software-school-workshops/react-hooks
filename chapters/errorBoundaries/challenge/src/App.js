import React, { useState, useEffect } from 'react';
import './App.css';

// TODO: Create an ErrorBoundary component

// Weather Widget - Will throw an error when the temperature is above 95°F
function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with random temperature
    setTimeout(() => {
      const temp = Math.floor(Math.random() * 40) + 70; // 70-110°F
      setWeather({
        temperature: temp,
        condition: temp > 95 ? 'Hot' : 'Pleasant',
        location: 'Nashville, TN'
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="widget-loading">Loading weather data...</div>;

  // This will throw an error when temperature > 95
  if (weather.temperature > 95) {
    throw new Error('Weather service crashed due to extreme temperature!');
  }

  return (
    <div className="widget">
      <h3>Weather</h3>
      <div className="widget-content">
        <p className="temperature">{weather.temperature}°F</p>
        <p>{weather.condition} in {weather.location}</p>
      </div>
    </div>
  );
}

// Stock Widget - Will throw an error when stock price drops below $50
function StockWidget() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStocks([
        { symbol: 'AAPL', price: Math.floor(Math.random() * 100) + 20 },
        { symbol: 'GOOGL', price: Math.floor(Math.random() * 100) + 20 },
        { symbol: 'MSFT', price: Math.floor(Math.random() * 100) + 20 }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <div className="widget-loading">Loading stock data...</div>;

  // Check if any stock is below $50 and throw error
  const lowStock = stocks.find(stock => stock.price < 50);
  if (lowStock) {
    throw new Error(`Stock market crash! ${lowStock.symbol} dropped below $50!`);
  }

  return (
    <div className="widget">
      <h3>Stocks</h3>
      <div className="widget-content">
        <ul className="stock-list">
          {stocks.map(stock => (
            <li key={stock.symbol}>
              {stock.symbol}: ${stock.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// News Widget - Always works correctly
function NewsWidget() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNews([
        { id: 1, title: 'React 19 Released', source: 'Tech News' },
        { id: 2, title: 'Understanding Error Boundaries', source: 'React Blog' },
        { id: 3, title: 'The Future of Web Development', source: 'Dev Weekly' }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) return <div className="widget-loading">Loading news...</div>;

  return (
    <div className="widget">
      <h3>Latest News</h3>
      <div className="widget-content">
        <ul className="news-list">
          {news.map(item => (
            <li key={item.id}>
              {item.title} <span className="source">({item.source})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Todo Widget - Will throw an error when there are more than 5 todos
function TodoWidget() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn Error Boundaries', completed: false },
    { id: 2, text: 'Build a React app', completed: true },
    { id: 3, text: 'Deploy to production', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo.trim()) return;
    
    const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
    setNewTodo('');
  };

  // This will throw an error when there are more than 5 todos
  if (todos.length > 5) {
    throw new Error('Todo list crashed! Too many tasks to handle!');
  }

  return (
    <div className="widget">
      <h3>Todo List</h3>
      <div className="widget-content">
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </li>
          ))}
        </ul>
        <div className="todo-input">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo"
          />
          <button onClick={addTodo}>Add</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Dashboard</h1>
        <p>This dashboard contains widgets that might crash. Implement Error Boundaries to keep the dashboard functional.</p>
      </header>
      
      <div className="dashboard">
        {/* TODO: Wrap widgets with ErrorBoundary components */}
        <WeatherWidget />
        <StockWidget />
        <NewsWidget />
        <TodoWidget />
      </div>
    </div>
  );
}

export default App;