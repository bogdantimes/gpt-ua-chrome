window.gtag = () => {}
window.grecaptcha = {
  enterprise: {
    execute() {
      return {
        then(cb) {
          return cb("chrome-extension")
        }
      };
    }
  }
};

