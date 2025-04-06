const ROUTES = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  DASHBOARD: '/overview',
  PROPOSALS: '/proposals',
  PROPOSAL: '/proposals/[id]',
  PROPOSAL_NEW: '/proposals/new',
  PROPOSAL_EDIT: '/proposals/edit/[id]',
  PROPOSAL_VIEW: '/proposals/view/[id]',
  PROPOSAL_VIEW_ID: '/proposals/view/[id]/[viewId]',
  PROPOSAL_VIEW_ID_EDIT: '/proposals/view/[id]/[viewId]/edit',
  PROPOSAL_VIEW_ID_DELETE: '/proposals/view/[id]/[viewId]/delete',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  NOT_FOUND: '*',
};
export default ROUTES;
