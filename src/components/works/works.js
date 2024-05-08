import css from './works.module.css'
import Skan from './projectSkan/skan';
import KanbanBoard from './projectKanbanBoard/kanbanBoard';
import BookShop from './projectBookShop/bookShop';
import Design from './projectDesign/design';
import Freehand from './projectFreehand/freehand';

function Works() {

    return (
        <div className={css.worksWrap}>
            <Skan />
            <KanbanBoard />
            <BookShop />
            <Design />
            <Freehand />
        </div>
    )
}

export default Works;