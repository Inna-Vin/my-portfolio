import css from './kanbanBoard.module.css'
import kanbanMain from '../../../img/kanban-main.jpg'
import kanbanDescription from '../../../img/kanban-description.jpg'
import kanbanNewTask from '../../../img/kanban-newTask.jpg'
import Slider from '../slider/slider'

function KanbanBoard() {

    const sliderImg = [{
        id: 0,
        img: `${kanbanMain}`,
        text: 'kanban project'
    },{
        id: 1,
        img: `${kanbanDescription}`,
        text: 'kanban project'
    },{
        id: 2,
        img: `${kanbanNewTask}`,
        text: 'kanban project'
    }]

    return(
        <div className={css.workKanbanWrap}>
            <h1 className={css.h1}>Project Kanban Board !</h1>
            <div className={css.workKanban}>
                <div className={css.workKanbanDiscription}>
                    <p className={css.workKanbanDiscriptionItem}>В данном проекте была реализована доска с задачами, которые можно добавлять, удалять и перемещать между колонками.</p>
                    <p className={css.workKanbanDiscriptionItem}>Есть возмжность переходить на детальную страницу задачи, кликнув на заголовок.</p>
                    <p className={css.workKanbanDiscriptionItem}>Любые изменения, внесенные в приложение (добавление новых задач, перемещение задач между списками, изменение описания задачи), сохраняются в localStorage. При загрузке и перезагрузке страницы все данные подгружаются из него же.</p>
                    <button className={css.downloadProject}><a className={css.downloadProjectLink} href='https://github.com/Inna-Vin/kanban-board.git' target='_blank' rel="noreferrer">GitHub</a></button>
                </div>
                <Slider sliderImg={sliderImg} />
            </div>
        </div>
    )
}

export default KanbanBoard;