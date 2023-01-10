export const OPEN_DETAILS_MODAL = 'OPEN_DETAILS_MODAL';
export const CLOSE_DETAILS_MODAL = 'CLOSE_DETAILS_MODAL';

export const openDetailsModal = (payload) => ({
  type: OPEN_DETAILS_MODAL,
  payload,
});

export const closeDetailsModal = () => ({
  type: CLOSE_DETAILS_MODAL,
});
