const notifier = (store) => {
  store.subscribe(({ type, payload }, { snackbar }) => {
    if (type === "snackbar/showSuccess") {
      snackbar.content = payload || "Action Success";
      snackbar.color = "green";
      snackbar.show = true;
    }
    if (type === "snackbar/showError") {
      snackbar.content = payload || "Action Failed";
      snackbar.color = "red";
      snackbar.show = true;
    }
    if (type === "snackbar/hideSnackbar") {
      snackbar.show = false;
    }
  });
};

export default notifier;
