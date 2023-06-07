import {useState} from "react";

// export default (arr, cnt) => {
//     // Текущая страница
//     const [page, setPage] = useState(1);
//     // 21 gds => 5 / page
//     const maxPage = Math.ceil(arr.length / cnt);
//     const step = (n) => {
//         // Переход к конкретной странице
//         setPage(n);

//     const next = () => {
//         // Следующая страница не должна быть больше макс
//         let nextPage = Math.min(page + 1, maxPage);
//         setPage(nextPage);
//     }
//     const prev = () => {
//         // Предыдущая страница не должна быть меньше 1
//         let prevPage = Math.max(page - 1, 1);
//         setPage(prevPage);
//     }
   
//     }
//     const pageData = () => {
//         let start = (page - 1) * cnt;
//         let end = start + cnt;
//         return arr.slice(start, end);
//     }

//     return { page, maxPage, next, prev, step, pageData }
// }
const usePagination = (arr, cnt) => {
    const [current, setCurrent] = useState(1);
    // сколько страниц будет на сайте исходя из количества данных и сколько элементов мы хотим видеть на странице
    // 16 el => 5 el/page => pages = 4 (не 3,2!)
    const max = Math.ceil(arr.length / cnt);

    // функция принимает в себя номер страницы, которая становится активной
    const step = (page) => {
        setCurrent(page);
    }

    const prev = () => {
        // не выходим за рамки первой страницы (не должно быть <= 0)
        const prevPage = Math.max(current - 1, 1)
        setCurrent(prevPage)
    }

    const next = () => {
        // не выходим за рамки последней страницы (не должно быть > max)
        const nextPage = Math.min(current + 1, max)
        setCurrent(nextPage)
    }

    const setDataPerPage = () => {
        // cnt + current
        // 1 => arr[0, 20)
        // 2 => arr[20, 40)
        // 3 => arr[40, 60)
        let start = (current - 1) * cnt;
        let end = start + cnt;
        return arr.slice(start, end);
    }

    return {current, max, step, prev, next, setDataPerPage}
}

export default usePagination;