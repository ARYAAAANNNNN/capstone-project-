import { useState, useEffect } from "react";

const getInitialOrders = () => {
  try {
    const savedOrders = localStorage.getItem("kitchenOrders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  } catch {
    return [];
  }
};

const KitchenPage = () => {
  const [orders, setOrders] = useState(() => getInitialOrders());

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "kitchenOrders") {
        try {
          const newOrders = e.newValue ? JSON.parse(e.newValue) : [];
          setOrders(newOrders);
        } catch {
          setOrders([]);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const updateStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );

    setOrders(updatedOrders);
    localStorage.setItem("kitchenOrders", JSON.stringify(updatedOrders));
  };

  const handleRefresh = () => {
    const savedOrders = localStorage.getItem("kitchenOrders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  };

  const handleDelete = (orderId) => {
    const updated = orders.filter((o) => o.id !== orderId);
    setOrders(updated);
    localStorage.setItem("kitchenOrders", JSON.stringify(updated));
  };

  return (
    <div>
      <h1>Kitchen Dashboard</h1>
      <p>Total Pesanan: {orders.length}</p>

      {orders.map((order) => (
        <div key={order.id}>
          <h3>Meja {order.tableNumber}</h3>
          <p>Status: {order.status}</p>

          {order.status === "pending" && (
            <button onClick={() => updateStatus(order.id, "cooking")}>
              Mulai Masak
            </button>
          )}

          {order.status === "cooking" && (
            <button onClick={() => updateStatus(order.id, "ready")}>
              Selesai
            </button>
          )}

          {order.status === "ready" && (
            <button onClick={() => handleDelete(order.id)}>
              Hapus
            </button>
          )}
        </div>
      ))}

      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default KitchenPage;
