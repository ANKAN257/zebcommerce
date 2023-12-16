import NavBar from "../features/navbar/NavBar"; // Fix import statement
import AdminOrders from "../features/admin/components/AdminOrders";

function AdminOrdersPage() {
    return ( 
        <div>
            <NavBar>
                <AdminOrders></AdminOrders>
            </NavBar>
        </div>
     );
}

export default AdminOrdersPage;