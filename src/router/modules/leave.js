import layout from '../../layout'

export default {
  path: '/audit',
  name: 'audit',
  component: layout,
  redirect: '/audit/leave',
  meta: { title: '审批管理', icon: 'setting' },
  children: [
    {
      path: '/audit/leave',
      name: 'leave',
      component: () => import('../../views/Leave'),
      meta: { title: '休假申请' }
    },
    {
      path: '/audit/approve',
      name: 'approve',
      component: () => import('../../views/Approve'),
      meta: { title: '待审批' }
    }
  ]
}