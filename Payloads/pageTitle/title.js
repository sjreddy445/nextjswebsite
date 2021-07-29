export function pageTitle(page) {
    let titleList = [];
    if (typeof window !== 'undefined') {
        titleList = JSON.parse(localStorage.getItem('pageTitle'));
    }
    if (titleList && titleList.length > 0) {
        let til = titleList.find(x => x.page === page);
        return til?.title;
    }
    else{
        return '';
    }
}