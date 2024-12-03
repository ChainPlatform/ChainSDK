export function getLayoutAdmin(layoutWidth, isDesktop, side_bar_width, styles) {
    let numberChart = 1;
    let padding = styles.s30;
    let sideBarWidth = side_bar_width;
    let sideBarOpen = false;
    let sideBarMiniWidth = styles.s70;
    let sideBarSecondWidth = side_bar_width - styles.s70;
    if (isDesktop && layoutWidth > styles.base_desktop) {
        sideBarWidth = side_bar_width;
    }
    if (layoutWidth > 600 && layoutWidth < styles.base_desktop) {
        numberChart = 2;
        padding = styles.s45;
    }
    if (layoutWidth >= styles.base_desktop && layoutWidth < styles.split_desktop) {
        numberChart = 3;
        padding = styles.s60;
    }
    if (layoutWidth >= styles.split_desktop) {
        numberChart = 4;
        padding = styles.s75;
    }
    const chartWidth = (layoutWidth - sideBarMiniWidth - padding) / numberChart;
    const chartWidthPC = 100 / numberChart;
    let view = {};
    view.sideBarWidth = sideBarWidth;
    view.sideBarMiniWidth = sideBarMiniWidth;
    view.sideBarSecondWidth = sideBarSecondWidth;
    view.sideBarOpen = sideBarOpen;
    view.chartWidth = chartWidth;
    view.chartWidthPC = chartWidthPC + "%";
    return view;
}

export function getScreenSizeAdmin(layoutWidth, styles) {
    let numberChart = 1;
    let padding = styles.s30;
    if (layoutWidth > 767) {
        numberChart = 2;
        padding = styles.s45;
    }
    const chartWidth = (layoutWidth - padding) / numberChart;
    const chartWidthPC = 100 / numberChart;
    let view = {};
    view.padding = padding;
    view.width = chartWidth;
    view.widthPC = chartWidthPC + "%";
    return view;
}