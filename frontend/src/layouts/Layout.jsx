import AdminLayout from "./AdminLayout";
import SiteLayout from "./SiteLayout";

const isAdmin = window.location.pathname.startsWith("/admin");
//console.log(isAdmin);

export const Layout = isAdmin ? AdminLayout : SiteLayout;

