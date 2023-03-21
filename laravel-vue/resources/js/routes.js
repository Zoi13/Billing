import Dashboard from "./components/Dashboard.vue";
import Billing from "./pages/billing/Billing.vue";
import User_bill from "./pages/billing/Userbill.vue";
import Reports from "./pages/reports/Reports.vue";
import References from "./pages/references/references.vue";
import User from "./pages/user-management/User-management.vue";
import Contents from "./pages/reports/Contents.vue";

export default [
    {
        path: "/laravel-vue/dashboard",
        name: "admin.dashboard",
        component: Dashboard,
    },

    {
        path: "/laravel-vue/billing",
        name: "admin.billing",
        component: Billing,
    },

    {
        path: "/laravel-vue/reports",
        name: "admin.Reports",
        component: Reports,
    },

    {
        path: "/laravel-vue/references",
        name: "admin.references",
        component: References,
    },

    {
        path: "/laravel-vue/user-management",
        name: "admin.user-management",
        component: User,
    },
    {
        path: "/laravel-vue/Userbill",
        name: "admin.Userbilling",
        component: User_bill,
    },

    {
        path: "/laravel-vue/Contents",
        name: "admin.reports",
        component: Contents,
    },
];
