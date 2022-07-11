import layout from '../../layout'

export default {
  path: '/system',
  name: 'system',
  component: layout,
  redirect: '/system/user',
  meta: { title: '系统管理', icon: 'setting' },
  children: [
    {
      path: '/system/user',
      name: 'user',
      component: () => import('../../views/user'),
      meta: { title: '用户管理' }
    },
    {
      path: '/system/role',
      name: 'role',
      // component: () => import('../../views/Role'),
      meta: { title: '角色管理' }
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import('../../views/Staff'),
      meta: { title: '员工管理' }
    },
    {
      path: '/system/salary',
      name: 'salary',
      component: () => import('../../views/Salary'),
      meta: { title: '薪酬管理' }
    },
    {
      path: '/system/menu',
      name: 'menu',
      component: () => import('../../views/menu'),
      meta: { title: '菜单管理' }
    },
    {
      path: '/system/dept',
      name: 'dept',
      component: () => import('../../views/Dept'),
      meta: { title: '部门管理' }
    }
  ]
}