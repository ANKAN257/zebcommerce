import AdminProductDetail from "../features/admin/components/AdminProductDetail";
import NavBar from "../features/navbar/NavBar"; // Fix import statement

function AdminProductDetailPage() {

    return ( 
        <div>
            <NavBar>
                <AdminProductDetail></AdminProductDetail>
            </NavBar>
        </div>
     );
}

export default AdminProductDetailPage;