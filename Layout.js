export function getScreenSize(layoutWidth, isDesktop, side_bar_width, styles) {
    const viewPadding = styles.fs15;
    let menuViewWidth = styles.s0;
    let bannerViewWidth = styles.s0;
    let splitPadding = styles.s0;
    let sideBarWidth = styles.s0;
    let courseViewWidth = styles.s0;
    let newsViewWidth = styles.s0;
    let bannerOnScreen = 1;
    //Menu
    let imageMenuSize = styles.s45;
    let fontMenuSize = styles.fs9_5;
    let menuTotalItem = 5;
    let menuSpace = 4 * styles.s5;
    // Course
    let courseTotalItem = 2;
    let newsTotalItem = 2;
    let courseSpace = 0;
    let newsSpace = 0;
    if (isDesktop) {
        courseSpace = styles.s30 + styles.fs15;
        newsSpace = styles.s30 + styles.fs15;
    } else {
        courseSpace = styles.fs15;
        newsSpace = styles.fs15;
    }
    if (isDesktop && layoutWidth > styles.base_desktop) {
        sideBarWidth = side_bar_width;
        // Menu
        imageMenuSize = styles.s55;
        fontMenuSize = styles.fs12;
        // Course
        courseTotalItem = 3;
        newsTotalItem = 3;
        courseSpace = styles.s45 + styles.fs15;
        newsSpace = styles.s45 + styles.fs15;
    }
    let viewWidth = styles.s345;
    let viewHeight = styles.s195;
    if (isDesktop) {
        if (layoutWidth >= styles.split_desktop) {
            bannerOnScreen = 2;
            splitPadding = styles.fs15;
            // Menu
            menuTotalItem = 10;
            menuSpace = 9 * styles.s5;
            fontMenuSize = styles.fs13;
            // Course
            courseTotalItem = 4;
            newsTotalItem = 4;
            courseSpace = styles.s75;
            newsSpace = styles.s75;
        }
        if (layoutWidth >= styles.wide_split_desktop) {
            // Course
            courseTotalItem = 5;
            courseSpace = styles.s75 + styles.fs15;
        }
        bannerViewWidth = layoutWidth - sideBarWidth - 2 * viewPadding - splitPadding;
        viewWidth = bannerViewWidth / bannerOnScreen;
        viewHeight = styles.s195 * (viewWidth / styles.s345);
    }
    // Menu
    menuViewWidth = layoutWidth - sideBarWidth - 2 * viewPadding - menuSpace;
    const menuWidth = menuViewWidth / menuTotalItem;
    // Course
    courseViewWidth = layoutWidth - sideBarWidth - 2 * viewPadding - courseSpace;
    const courseWidth = courseViewWidth / courseTotalItem;
    newsViewWidth = layoutWidth - sideBarWidth - 2 * viewPadding - newsSpace;
    const newsWidth = newsViewWidth / newsTotalItem;
    let numberChart = 1;
    let padding = styles.s30;
    if (layoutWidth > 460 && layoutWidth < styles.base_desktop) {
        numberChart = 2;
        padding = styles.s45;
    }
    if (layoutWidth >= styles.base_desktop && layoutWidth < styles.split_desktop) {
        numberChart = 3;
        padding = styles.s60;
    }
    if (layoutWidth >= styles.split_desktop) {
        numberChart = 5;
        padding = styles.s90;
    }
    let packageWidth = (layoutWidth - padding - sideBarWidth) / numberChart;
    if (packageWidth < styles.s232) {
        packageWidth = styles.s232;
    }
    if (packageWidth > styles.s280) {
        packageWidth = styles.s280;
    }

    let numberwebinarChart = 1;
    let webinarPadding = styles.s0;
    if (layoutWidth - sideBarWidth - 2 * viewPadding >= 500) {
        numberwebinarChart = 2;
        webinarPadding = styles.fs15;
    }
    let webinarViewWidth = layoutWidth - sideBarWidth - 2 * viewPadding - webinarPadding;
    const webinarWidth = webinarViewWidth / numberwebinarChart;
    let view = {};
    view.webinarWidth = webinarWidth;
    view.webinarPadding = webinarPadding;
    view.numberWebinar = numberwebinarChart;
    view.viewPadding = viewPadding;
    view.sideBarWidth = sideBarWidth;
    view.bannerOnScreen = bannerOnScreen;
    view.imageMenuSize = imageMenuSize;
    view.fontMenuSize = fontMenuSize;
    view.viewWidth = viewWidth;
    view.viewHeight = viewHeight;
    view.menuWidth = menuWidth;
    view.courseWidth = courseWidth;
    view.newsWidth = newsWidth;
    view.splitPadding = splitPadding;
    view.packageWidth = packageWidth;
    return view;
}

export function getCartLayout(layoutWidth, isDesktop, side_bar_width, styles) {
    let viewPadding = styles.s0;
    let viewSplit = styles.w100pc;
    let borderRadius = styles.s0;
    let marginBottom = styles.s1;
    let sideBarWidth = styles.s0;
    if (isDesktop && layoutWidth > styles.base_desktop) {
        sideBarWidth = side_bar_width;
        borderRadius = styles.s4;
        marginBottom = styles.fs10;
    }
    if (layoutWidth >= styles.wide_split_desktop) {
        viewSplit = styles.w50pc;
    }
    if (layoutWidth >= 767) {
        viewPadding = styles.fs15;
    }
    let view = {};
    view.viewPadding = viewPadding;
    view.viewSplit = viewSplit;
    view.sideBarWidth = sideBarWidth;
    view.itemBorderRadius = borderRadius;
    view.itemMarginBottom = marginBottom;
    return view;
}

export function getTransactionLayout(layoutWidth, isDesktop, styles) {
    let viewSplit = styles.w100pc;
    if (isDesktop && layoutWidth >= 767) {
        viewSplit = styles.w50pc;
    }
    let view = {};
    view.viewSplit = viewSplit;
    return view;
}

export function getCourseLayout(layoutWidth, isDesktop, styles) {
    let viewSplit = styles.w100pc;
    let viewPadding = styles.s0;
    let color = 0;
    let showButton = 1;
    let childViewPadding = styles.fs15;
    if (isDesktop && layoutWidth >= 767) {
        viewSplit = styles.w50pc;
        viewPadding = styles.fs15;
        childViewPadding = styles.s0;
        color = 1;
        showButton = 0;
    }
    if (isDesktop && layoutWidth > 767 && layoutWidth < 991) {
        showButton = 1;
    }
    let view = {};
    view.color = color;
    view.viewSplit = viewSplit;
    view.viewPadding = viewPadding;
    view.childViewPadding = childViewPadding;
    view.showButton = showButton;
    return view;
}

export function getUserCourseLayout(layoutWidth, isDesktop, styles) {
    let viewPadding = styles.fs7_5;
    let numberCol = 2;
    if (isDesktop && layoutWidth >= 500) {
        numberCol = 3;
    }
    if (isDesktop && layoutWidth > 767 && layoutWidth < 991) {
        numberCol = 4;
    }
    if (isDesktop && layoutWidth >= 991) {
        numberCol = 5;
    }
    const areaSpace = numberCol * styles.fs15;
    const courseWidth = (layoutWidth - areaSpace - 2 * viewPadding) / numberCol;
    let view = {};
    view.viewPadding = viewPadding;
    view.numberCol = numberCol;
    view.courseWidth = courseWidth;
    return view;
}

export function getUserOrderLayout(layoutWidth, isDesktop, styles) {
    let viewPadding = styles.fs7_5;
    let numberCol = 1;
    let space = styles.fs15;
    if (isDesktop && layoutWidth >= 600) {
        numberCol = 2;
        space = styles.s30;
    }
    if (isDesktop && layoutWidth >= 991) {
        numberCol = 3;
        space = styles.s45;
    }
    const itemWidth = (layoutWidth - space - 2 * viewPadding) / numberCol;
    let view = {};
    view.viewPadding = viewPadding;
    view.numberCol = numberCol;
    view.itemWidth = itemWidth;
    return view;
}

export function getCourseLearingLayout(layoutWidth, isDesktop, styles) {
    let sidebarWidth = styles.s0;
    let viewPadding = styles.s0;
    if (layoutWidth >= 992) {
        sidebarWidth = styles.s345;
    }
    let view = {};
    view.sidebarWidth = sidebarWidth;
    view.viewPadding = viewPadding;
    return view;
}

export function getScreenWebinarSize(layoutWidth, styles) {
    let numberChart = 1;
    let padding = styles.s30;
    if (layoutWidth >= 500) {
        numberChart = 2;
        padding = styles.s45;
    }
    let tmpViewWidth = layoutWidth - padding;
    let viewWidth = tmpViewWidth / numberChart;
    let view = {};
    view.viewWidth = viewWidth;
    view.viewPadding = styles.fs15;
    return view;
}