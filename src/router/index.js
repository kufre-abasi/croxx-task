import { createRouter, createWebHistory } from 'vue-router'
import middleware from '../services/Middleware';
import ActiveUsers from '@/views/Customers/ActiveUsers.vue';
import AllCustomers from '@/views/Customers/AllCustomers.vue';
import Accounts from '@/views/Customers/Accounts.vue';
import ResubmittedUsers from '@/views/Customers/ResubmittedUsers.vue';
import DeclinedUsers from '@/views/Customers/DeclinedUsers.vue';
import ManageCustomer from '@/views/Customers/ManageCustomer.vue';
import ManageDocument from '@/views/Customers/Document.vue';
import AccountRequest from '@/views/AccountManagement/AccountRequest.vue';
import ActivityLog from '@/views/AccountManagement/ActivityLog.vue';
import Staff from '@/views/AccountManagement/Staff.vue';
import AllCompliance from '@/views/AccountManagement/Compliance/AllCompliance.vue';
import SuspiciousAccount from '@/views/AccountManagement/Compliance/SuspiciousAccount.vue';
import WatchList from '@/views/AccountManagement/Compliance/Watchlist.vue';
import BlockedAccounts from '@/views/AccountManagement/BlockedAccounts.vue';
import SupportTicket from '@/views/AccountManagement/SupportTicket.vue';
import Messages from '@/views/AccountManagement/Messages.vue';
import AllTransactions from '@/views/AccountManagement/Transactions/AllTransaction.vue';
import PendingTransactions from '../views/AccountManagement/Transactions/PendingTransaction.vue';
import RefundTransactions from '../views/AccountManagement/Transactions/RefundTransaction.vue';
import PromotionalEmail from '@/views/Marketing/PromotionalEmail/PromotionalEmail.vue';
import MultiplePot from '@/views/Marketing/PaymentLinks/MultiplePot.vue';
import SinglePot from '@/views/Marketing/PaymentLinks/SinglePot.vue';
import Invoice from '@/views/Marketing/Invoice/Invoice.vue';
import Plans from '@/views/Marketing/Subscription/index.vue';
import CreateSubscriptionPlan from '@/views/Marketing/Subscription/create.vue';
import UpdateSubscriptionPlan from '@/views/Marketing/Subscription/update.vue';
import Blog from '@/views/Website/Blog/index.vue';
import BlogCreate from '@/views/Website/Blog/create.vue';
import UpdateCreate from '@/views/Website/Blog/update.vue';
import FAQ from '@/views/Website/Faqs/index.vue';
import FAQCreate from '@/views/Website/Faqs/create.vue';
import FAQUpdate from '@/views/Website/Faqs/update.vue';
import Login from '@/views/Auth/Login.vue';
import Logout from '@/views/Auth/Logout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:"Home",
      redirect: '/all-customers'
    },
    {
      path: '/login',
      name:"Login",
      component: Login,
      beforeEnter: [middleware.redirectDashboard]
    },
    {
      path: '/log-out',
      name:"Logout",
      component: Logout,
      
    },
    {
      path: '/active-users',
      name: 'ActiveUsers',
      component: ActiveUsers,
      
    },
    {
      path: '/all-customers',
      name: 'AllCustomers',
      component: AllCustomers,
      
    },
    {
      path: '/accounts',
      name: 'Accounts',
      component: Accounts,
      
    },
    {
      path: '/resubmitted-users',
      name: 'ResubmittedUsers',
      component: ResubmittedUsers,
      
    },
      {
      path: '/declined-users',
      name: 'DeclinedUsers',
      component: DeclinedUsers,
      
    },
      {
      path: '/customers/manage-customer/:id',
      name: 'ManageCustomer',
      component: ManageCustomer,
      
    },
	{
		path: '/customers/document/:id',
		name: 'ManageDocument',
		component: ManageDocument,
		
	  },
      {
      path: '/account-management/account-request',
      name: 'AccountRequest',
      component: AccountRequest,
      
    },
      {
      path: '/account-management/activity-log',
      name: 'Activity-Log',
      component: ActivityLog,
      
    },
      {
      path: '/account-management/staff',
      name: 'Staff',
      component: Staff,
      
    },
      {
      path: '/account-management/all-compliance',
      name: 'All-Compliance',
      component: AllCompliance,
      
    },
      {
      path: '/account-management/suspicious-account',
      name: 'Suspicious-account',
      component: SuspiciousAccount,
      
    },
      {
      path: '/account-management/watch-list',
      name: 'Watch-list',
      component: WatchList,
      
    },
      {
      path: '/account-management/blocked-accounts',
      name: 'Blocked-accounts',
      component: BlockedAccounts,
      
    },
      {
      path: '/account-management/support-ticket',
      name: 'Support-Ticket',
      component: SupportTicket,
      
    },
      {
      path: '/account-management/messages',
      name: 'Messages',
      component: Messages,
      
    },
      {
      path: '/account-management/all-transactions',
      name: 'All-Transactions',
      component: AllTransactions,
      
    },
      {
      path: '/account-management/pending-transactions',
      name: 'Pending-Transactions',
      component: PendingTransactions,
      
    },
      {
      path: '/account-management/refund-transactions',
      name: 'Refund-Transactions',
      component: RefundTransactions,
      
    },
      {
      path: '/marketing/promotional-email',
      name: 'Promotional-Email',
      component: PromotionalEmail,
      
    },
      {
      path: '/marketing/paymentlinks/multiple-pot',
      name: 'Multiple-Pot',
      component: MultiplePot,
      
    },
      {
      path: '/marketing/paymentlinks/single-pot',
      name: 'Single-Pot',
      component: SinglePot,
      
    },
      {
      path: '/marketing/invoice',
      name: 'Invoice',
      component: Invoice,
      
    },
    {
      path: '/subscription/plans',
      name: 'SubscriptionPlan',
      component: Plans,
      
    },
    {
      path: '/subscription/plans/create',
      name: 'CreateSubscription',
      component: CreateSubscriptionPlan,
      
    },
    {
      path: '/subscription/plans/update/:id',
      name: 'UpdateSubscriptionPlan',
      component: UpdateSubscriptionPlan,
      
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blog,
      
    },
    {
        path: '/blog/create',
        name: 'CreateBlog',
        component: BlogCreate,
        
    },
    {
        path: '/blog/update/:id',
        name: 'UpdateBlog',
        component: UpdateCreate,
        
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQ,
        
    },
    {
        path: '/faq/create',
        name: 'FAQCreate',
        component: FAQCreate,
        
    },
    {
        path: '/faq/update/:id',
        name: 'FAQUpdate',
        component: FAQUpdate,
        
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
