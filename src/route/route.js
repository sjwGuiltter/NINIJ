let routes = [
    { path: '/', redirect: '/home' },
    {
        path: "/home",
        component: () => import('../view/home/home.vue')
    }
]

export { routes }