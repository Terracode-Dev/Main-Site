import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign, ShoppingCart, ArrowUp, ArrowDown } from 'lucide-react';

const Home1 = () => {

    // Sample data
  const monthlyData = [
    { month: 'Jan', sales: 65000, orders: 940, customers: 380 },
    { month: 'Feb', sales: 72000, orders: 1020, customers: 420 },
    { month: 'Mar', sales: 68000, orders: 980, customers: 395 },
    { month: 'Apr', sales: 85000, orders: 1150, customers: 450 },
    { month: 'May', sales: 92000, orders: 1280, customers: 485 },
    { month: 'Jun', sales: 88000, orders: 1180, customers: 460 }
  ];

  const recentOrders = [
    // { id: '1', customer: 'John Doe', amount: 1200, status: 'Completed' },
    { id: '2', customer: 'Jane Smith', amount: 850, status: 'Pending' },
    { id: '3', customer: 'Bob Johnson', amount: 2300, status: 'Completed' },
    { id: '4', customer: 'Alice Brown', amount: 950, status: 'Processing' }
  ];

  return (
    <div className=" border-2 w-full p-6 space-y-6 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Sales Dashboard</h1>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleString()}</div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Sales</p>
                <p className="text-2xl font-bold">$470,000</p>
                <div className="flex items-center text-green-500 text-sm">
                  <ArrowUp className="w-4 h-4" />
                  <span>12.5% vs last month</span>
                </div>
              </div>
              <DollarSign className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <p className="text-2xl font-bold">6,550</p>
                <div className="flex items-center text-green-500 text-sm">
                  <ArrowUp className="w-4 h-4" />
                  <span>8.2% vs last month</span>
                </div>
              </div>
              <ShoppingCart className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Customers</p>
                <p className="text-2xl font-bold">2,590</p>
                <div className="flex items-center text-green-500 text-sm">
                  <ArrowUp className="w-4 h-4" />
                  <span>5.8% vs last month</span>
                </div>
              </div>
              <Users className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Order Value</p>
                <p className="text-2xl font-bold">$71.75</p>
                <div className="flex items-center text-red-500 text-sm">
                  <ArrowDown className="w-4 h-4" />
                  <span>2.1% vs last month</span>
                </div>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Sales Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#3b82f6" name="Sales ($)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Orders vs Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="orders" fill="#8b5cf6" name="Orders" />
                  <Bar dataKey="customers" fill="#10b981" name="Customers" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Order ID</th>
                  <th className="py-2 text-left">Customer</th>
                  <th className="py-2 text-left">Amount</th>
                  <th className="py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-2">{order.id}</td>
                    <td className="py-2">{order.customer}</td>
                    <td className="py-2">${order.amount}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Home1