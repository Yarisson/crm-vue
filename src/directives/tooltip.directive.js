export default {
  bind(el, {value}) {
    M.Tooltip.init(el, {html: value});
  },
  unbind(el) {
    const tooltip = M.tooltip.getInstance(el);

    if (tooltip && tooltip.destroy) {
      tooltip.destroy();
    }
  }
}
