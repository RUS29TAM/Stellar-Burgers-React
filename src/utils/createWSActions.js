export const createWSActions = (onErrorAction, onOpenAction, connectStartType, onCloseAction, onMassageAction, connectStopType) => ({
    onError: onErrorAction,
    connectStart: connectStartType,
    onClose: onCloseAction,
    onMassage: onMassageAction,
    connectStop: connectStopType,
    onOpen: onOpenAction,
})
