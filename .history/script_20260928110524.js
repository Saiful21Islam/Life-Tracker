/* =====================================================
   MY 7-DAY LIFE TRACKER
   Personalized Routine System
===================================================== */


/* =====================================================
   STORAGE
===================================================== */

const STORAGE_KEY =
    "personal_life_tracker_v2";


/* =====================================================
   DAYS
   Saturday -> Friday
===================================================== */

const DAYS = [

    "Saturday",

    "Sunday",

    "Monday",

    "Tuesday",

    "Wednesday",

    "Thursday",

    "Friday"

];


/* =====================================================
   DEFAULT CATEGORIES
===================================================== */

const DEFAULT_CATEGORIES = [

    "Job",

    "University",

    "German",

    "Programming",

    "Health",

    "Personal",

    "Rest"

];


/* =====================================================
   LOAD DATA
===================================================== */

let data =
    JSON.parse(
        localStorage.getItem(
            STORAGE_KEY
        )
    );


/* =====================================================
   INITIAL DATA
===================================================== */

if (!data) {

    data = {

        categories:
            [...DEFAULT_CATEGORIES],

        tasks: []

    };


    createDefaultRoutine();


    save();

}


/* =====================================================
   SELECTED DATE
===================================================== */

let selectedDate =
    new Date();


/* =====================================================
   EDITING TASK
===================================================== */

let editingTaskId =
    null;


/* =====================================================
   DATE KEY
===================================================== */

function dateKey(date) {

    const year =
        date.getFullYear();


    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            date.getDate()
        ).padStart(2, "0");


    return (
        year +
        "-" +
        month +
        "-" +
        day
    );

}


/* =====================================================
   FORMAT DATE
===================================================== */

function formatDate(date) {

    return date.toLocaleDateString(

        "en-GB",

        {

            day:
                "2-digit",

            month:
                "short",

            year:
                "numeric"

        }

    );

}


/* =====================================================
   GET SATURDAY
===================================================== */

function getSaturday(date) {

    const d =
        new Date(date);


    d.setHours(
        0,
        0,
        0,
        0
    );


    const day =
        d.getDay();


    const difference =
        day === 6
            ? 0
            : day + 1;


    d.setDate(
        d.getDate()
        -
        difference
    );


    return d;

}


/* =====================================================
   GET WEEK DATES
===================================================== */

function getWeekDates(date) {

    const saturday =
        getSaturday(date);


    const dates = [];


    for (
        let i = 0;
        i < 7;
        i++
    ) {

        const d =
            new Date(
                saturday
            );


        d.setDate(
            saturday.getDate()
            +
            i
        );


        dates.push(d);

    }


    return dates;

}


/* =====================================================
   SAVE
===================================================== */

function save() {

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(data)

    );

}


/* =====================================================
   CREATE DEFAULT ROUTINE
===================================================== */

function createDefaultRoutine() {

    const examples = [

        {

            day:
                "Saturday",

            name:
                "Office 9:00 AM - 6:00 PM",

            category:
                "Job",

            time:
                "09:00",

            priority:
                "High"

        },

        {

            day:
                "Saturday",

            name:
                "Programming Practice",

            category:
                "Programming",

            time:
                "19:00",

            priority:
                "Medium"

        },

        {

            day:
                "Saturday",

            name:
                "German Vocabulary",

            category:
                "German",

            time:
                "20:30",

            priority:
                "Medium"

        },

        {

            day:
                "Sunday",

            name:
                "University Study",

            category:
                "University",

            time:
                "18:00",

            priority:
                "Medium"

        },

        {

            day:
                "Monday",

            name:
                "Office 9:00 AM - 6:00 PM",

            category:
                "Job",

            time:
                "09:00",

            priority:
                "High"

        },

        {

            day:
                "Monday",

            name:
                "Programming Practice",

            category:
                "Programming",

            time:
                "20:00",

            priority:
                "High"

        },

        {

            day:
                "Tuesday",

            name:
                "German Class",

            category:
                "German",

            time:
                "19:00",

            priority:
                "High"

        },

        {

            day:
                "Wednesday",

            name:
                "Programming Practice",

            category:
                "Programming",

            time:
                "20:00",

            priority:
                "Medium"

        },

        {

            day:
                "Thursday",

            name:
                "German Revision",

            category:
                "German",

            time:
                "20:00",

            priority:
                "Medium"

        },

        {

            day:
                "Friday",

            name:
                "Weekly Revision",

            category:
                "University",

            time:
                "10:00",

            priority:
                "Medium"

        }

    ];


    /*
       Current week Saturday
       is used for sample data.
    */

    const week =
        getWeekDates(
            new Date()
        );


    examples.forEach(
        example => {

            const index =
                DAYS.indexOf(
                    example.day
                );


            if (index === -1) {

                return;

            }


            const date =
                week[index];


            data.tasks.push({

                id:
                    generateId(),

                date:
                    dateKey(date),

                name:
                    example.name,

                category:
                    example.category,

                time:
                    example.time,

                priority:
                    example.priority,

                completed:
                    false

            });

        }
    );

}


/* =====================================================
   GENERATE ID
===================================================== */

function generateId() {

    return (

        Date.now().toString()
        +
        Math.random()
            .toString(36)
            .substring(2, 8)

    );

}


/* =====================================================
   PERCENTAGE
===================================================== */

function percentage(
    done,
    total
) {

    if (!total) {

        return 0;

    }


    return Math.round(
        (done / total) * 100
    );

}


/* =====================================================
   GET TASKS FOR DATE
===================================================== */

function getTasksForDate(date) {

    const key =
        dateKey(date);


    return data.tasks.filter(

        task =>
            task.date === key

    );

}


/* =====================================================
   GET DAY NAME
===================================================== */

function getDayName(date) {

    return date.toLocaleDateString(

        "en-US",

        {

            weekday:
                "long"

        }

    );

}


/* =====================================================
   MAIN RENDER
===================================================== */

function render() {

    const dates =
        getWeekDates(
            selectedDate
        );


    /*
       Week label
    */

    document.getElementById(
        "weekLabel"
    ).textContent =

        formatDate(
            dates[0]
        )
        +
        " - "
        +
        formatDate(
            dates[6]
        );


    /*
       Calendar
    */

    renderCalendar(
        dates
    );


    /*
       Selected day
    */

    renderTasks(
        selectedDate
    );


    /*
       Dashboard
    */

    renderDashboard(
        dates
    );


    /*
       Categories
    */

    renderCategoryProgress(
        dates
    );


    /*
       Category dropdown
    */

    renderCategoryOptions();

}


/* =====================================================
   RENDER CALENDAR
===================================================== */

function renderCalendar(
    dates
) {

    const week =
        document.getElementById(
            "week"
        );


    week.innerHTML =
        "";


    dates.forEach(
        date => {

            const tasks =
                getTasksForDate(
                    date
                );


            const done =
                tasks.filter(
                    task =>
                        task.completed
                ).length;


            const percent =
                percentage(
                    done,
                    tasks.length
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "day-card";


            /*
               Selected
            */

            if (

                dateKey(date)
                ===
                dateKey(
                    selectedDate
                )

            ) {

                card.classList.add(
                    "selected"
                );

            }


            /*
               Today
            */

            if (

                dateKey(date)
                ===
                dateKey(
                    new Date()
                )

            ) {

                card.classList.add(
                    "today"
                );

            }


            card.innerHTML = `

                <div class="day-name">

                    ${getDayName(date)}

                </div>


                <div class="day-date">

                    ${formatDate(date)}

                </div>


                <div class="day-percent">

                    ${percent}%

                </div>


                <div class="mini-bar">

                    <div
                        class="mini-fill"
                        style="
                            width:${percent}%
                        "
                    ></div>

                </div>

            `;


            card.onclick =
                function () {

                    selectedDate =
                        new Date(date);


                    document.getElementById(
                        "datePicker"
                    ).value =
                        dateKey(
                            selectedDate
                        );


                    render();

                };


            week.appendChild(
                card
            );

        }

    );

}


/* =====================================================
   RENDER DAILY TASKS
===================================================== */

function renderTasks(
    date
) {

    const dayName =
        getDayName(
            date
        );


    const tasks =
        getTasksForDate(
            date
        );


    document.getElementById(
        "selectedDayTitle"
    ).textContent =

        dayName
        +
        " - "
        +
        formatDate(
            date
        );


    document.getElementById(
        "selectedDateText"
    ).textContent =

        tasks.length
        +
        (
            tasks.length === 1
                ? " task planned"
                : " tasks planned"
        );


    const list =
        document.getElementById(
            "taskList"
        );


    list.innerHTML =
        "";


    /*
       Empty
    */

    if (!tasks.length) {

        list.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    📅
                </div>

                <h3>
                    No tasks planned
                </h3>

                <p>
                    Create your own routine
                    for ${dayName}.
                </p>

                <br>

                <button
                    class="primary-btn"
                    onclick="openTaskModal()"
                >
                    + Add Task
                </button>

            </div>

        `;


        return;

    }


    /*
       Render each task
    */

    tasks.forEach(
        task => {

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "task";


            if (
                task.completed
            ) {

                row.classList.add(
                    "completed"
                );

            }


            row.innerHTML = `

                <input
                    type="checkbox"
                    ${
                        task.completed
                            ? "checked"
                            : ""
                    }
                >


                <div class="task-info">

                    <div class="task-name">

                        ${escapeHTML(
                            task.name
                        )}

                    </div>


                    <div class="task-category">

                        ${escapeHTML(
                            task.category
                        )}

                    </div>


                    ${
                        task.time
                            ? `
                                <div class="task-time">
                                    🕒 ${task.time}
                                </div>
                              `
                            : ""
                    }

                </div>


                <span
                    class="
                        priority
                        ${task.priority.toLowerCase()}
                    "
                >

                    ${task.priority}

                </span>


                <div class="task-actions">

                    <button
                        class="icon-btn"
                        title="Edit"
                    >
                        ✏️
                    </button>


                    <button
                        class="
                            icon-btn
                            delete-btn
                        "
                        title="Delete"
                    >
                        🗑
                    </button>

                </div>

            `;


            /*
               Checkbox
            */

            const checkbox =
                row.querySelector(
                    "input"
                );


            checkbox.addEventListener(
                "change",
                function () {

                    task.completed =
                        this.checked;


                    save();

                    render();

                }
            );


            /*
               Edit
            */

            row.querySelector(
                ".icon-btn"
            ).addEventListener(
                "click",
                function () {

                    openEditTask(
                        task.id
                    );

                }
            );


            /*
               Delete
            */

            row.querySelector(
                ".delete-btn"
            ).addEventListener(
                "click",
                function () {

                    deleteTask(
                        task.id
                    );

                }
            );


            list.appendChild(
                row
            );

        }
    );

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(
    value
) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =====================================================
   RENDER DASHBOARD
===================================================== */

function renderDashboard(
    dates
) {

    let total =
        0;


    let completed =
        0;


    dates.forEach(
        date => {

            const tasks =
                getTasksForDate(
                    date
                );


            total +=
                tasks.length;


            completed +=

                tasks.filter(
                    task =>
                        task.completed
                ).length;

        }
    );


    const percent =
        percentage(
            completed,
            total
        );


    document.getElementById(
        "overall"
    ).textContent =
        percent + "%";


    document.getElementById(
        "completed"
    ).textContent =
        completed;


    document.getElementById(
        "remaining"
    ).textContent =
        total - completed;


    document.getElementById(
        "streak"
    ).textContent =

        calculateStreak()
        +
        " 🔥";

}


/* =====================================================
   CATEGORY PROGRESS
===================================================== */

function renderCategoryProgress(
    dates
) {

    const container =
        document.getElementById(
            "categoryProgress"
        );


    container.innerHTML =
        "";


    data.categories.forEach(
        category => {

            let total =
                0;


            let done =
                0;


            dates.forEach(
                date => {

                    const tasks =
                        getTasksForDate(
                            date
                        );


                    tasks.forEach(
                        task => {

                            if (
                                task.category
                                ===
                                category
                            ) {

                                total++;


                                if (
                                    task.completed
                                ) {

                                    done++;

                                }

                            }

                        }
                    );

                }
            );


            const percent =
                percentage(
                    done,
                    total
                );


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "progress-item";


            row.innerHTML = `

                <div class="category-header">

                    <span class="category-name">

                        ${escapeHTML(
                            category
                        )}

                    </span>


                    <span class="category-percent">

                        ${percent}%

                    </span>

                </div>


                <div class="progress-bar">

                    <div
                        class="progress"
                        style="
                            width:${percent}%
                        "
                    ></div>

                </div>

            `;


            container.appendChild(
                row
            );

        }
    );


    /*
       No categories
    */

    if (
        !data.categories.length
    ) {

        container.innerHTML = `

            <div class="empty-state">

                <p>
                    Create a category first.
                </p>

            </div>

        `;

    }

}


/* =====================================================
   CATEGORY DROPDOWN
===================================================== */

function renderCategoryOptions() {

    const select =
        document.getElementById(
            "taskCategory"
        );


    select.innerHTML =
        "";


    data.categories.forEach(
        category => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                category;


            option.textContent =
                category;


            select.appendChild(
                option
            );

        }
    );

}


/* =====================================================
   OPEN TASK MODAL
===================================================== */

function openTaskModal() {

    editingTaskId =
        null;


    document.getElementById(
        "taskModalTitle"
    ).textContent =
        "Create New Task";


    document.getElementById(
        "taskForm"
    ).reset();


    renderCategoryOptions();


    document.getElementById(
        "taskModal"
    ).classList.add(
        "show"
    );

}


/* =====================================================
   CLOSE TASK MODAL
===================================================== */

function closeTaskModal() {

    document.getElementById(
        "taskModal"
    ).classList.remove(
        "show"
    );


    editingTaskId =
        null;

}


/* =====================================================
   OPEN EDIT TASK
===================================================== */

function openEditTask(
    id
) {

    const task =
        data.tasks.find(
            item =>
                item.id === id
        );


    if (!task) {

        return;

    }


    editingTaskId =
        id;


    document.getElementById(
        "taskModalTitle"
    ).textContent =
        "Edit Task";


    renderCategoryOptions();


    document.getElementById(
        "taskName"
    ).value =
        task.name;


    document.getElementById(
        "taskCategory"
    ).value =
        task.category;


    document.getElementById(
        "taskTime"
    ).value =
        task.time || "";


    document.getElementById(
        "taskPriority"
    ).value =
        task.priority;


    document.getElementById(
        "taskModal"
    ).classList.add(
        "show"
    );

}


/* =====================================================
   TASK FORM
===================================================== */

document.getElementById(
    "taskForm"
).addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "taskName"
            ).value.trim();


        const category =
            document.getElementById(
                "taskCategory"
            ).value;


        const time =
            document.getElementById(
                "taskTime"
            ).value;


        const priority =
            document.getElementById(
                "taskPriority"
            ).value;


        if (!name) {

            return;

        }


        /*
           EDIT
        */

        if (editingTaskId) {

            const task =
                data.tasks.find(
                    item =>
                        item.id
                        ===
                        editingTaskId
                );


            if (task) {

                task.name =
                    name;

                task.category =
                    category;

                task.time =
                    time;

                task.priority =
                    priority;

            }

        }


        /*
           NEW TASK
        */

        else {

            data.tasks.push({

                id:
                    generateId(),

                date:
                    dateKey(
                        selectedDate
                    ),

                name:
                    name,

                category:
                    category,

                time:
                    time,

                priority:
                    priority,

                completed:
                    false

            });

        }


        save();


        closeTaskModal();


        render();

    }
);


/* =====================================================
   DELETE TASK
===================================================== */

function deleteTask(
    id
) {

    const task =
        data.tasks.find(
            item =>
                item.id === id
        );


    if (!task) {

        return;

    }


    const confirmed =
        confirm(
            `Delete "${task.name}"?`
        );


    if (!confirmed) {

        return;

    }


    data.tasks =
        data.tasks.filter(
            item =>
                item.id !== id
        );


    save();


    render();

}


/* =====================================================
   CATEGORY MODAL
===================================================== */

function openCategoryModal() {

    document.getElementById(
        "categoryName"
    ).value =
        "";


    document.getElementById(
        "categoryModal"
    ).classList.add(
        "show"
    );

}


function closeCategoryModal() {

    document.getElementById(
        "categoryModal"
    ).classList.remove(
        "show"
    );

}


/* =====================================================
   CATEGORY FORM
===================================================== */

document.getElementById(
    "categoryForm"
).addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "categoryName"
            ).value.trim();


        if (!name) {

            return;

        }


        /*
           Duplicate check
        */

        const exists =
            data.categories.some(

                category =>
                    category.toLowerCase()
                    ===
                    name.toLowerCase()

            );


        if (exists) {

            alert(
                "This category already exists."
            );

            return;

        }


        data.categories.push(
            name
        );


        save();


        closeCategoryModal();


        render();

    }
);


/* =====================================================
   TODAY
===================================================== */

function goToday() {

    selectedDate =
        new Date();


    document.getElementById(
        "datePicker"
    ).value =
        dateKey(
            selectedDate
        );


    render();

}


/* =====================================================
   DATE PICKER
===================================================== */

document.getElementById(
    "datePicker"
).addEventListener(
    "change",
    function() {

        if (!this.value) {

            return;

        }


        const parts =
            this.value.split("-");


        selectedDate =
            new Date(

                Number(
                    parts[0]
                ),

                Number(
                    parts[1]
                ) - 1,

                Number(
                    parts[2]
                )

            );


        render();

    }
);


/* =====================================================
   DAY COMPLETED
===================================================== */

function isDayCompleted(
    date
) {

    const tasks =
        getTasksForDate(
            date
        );


    /*
       No tasks means
       not completed.
    */

    if (!tasks.length) {

        return false;

    }


    return tasks.every(
        task =>
            task.completed
    );

}


/* =====================================================
   STREAK
===================================================== */

function calculateStreak() {

    let date =
        new Date();


    date.setHours(
        0,
        0,
        0,
        0
    );


    let streak =
        0;


    /*
       If today is not complete,
       start from yesterday.
    */

    if (
        !isDayCompleted(
            date
        )
    ) {

        date.setDate(
            date.getDate() - 1
        );

    }


    /*
       Maximum 365 days
    */

    for (
        let i = 0;
        i < 365;
        i++
    ) {

        if (
            isDayCompleted(
                date
            )
        ) {

            streak++;


            date.setDate(
                date.getDate() - 1
            );

        }

        else {

            break;

        }

    }


    return streak;

}


/* =====================================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        const taskModal =
            document.getElementById(
                "taskModal"
            );


        const categoryModal =
            document.getElementById(
                "categoryModal"
            );


        if (
            event.target ===
            taskModal
        ) {

            closeTaskModal();

        }


        if (
            event.target ===
            categoryModal
        ) {

            closeCategoryModal();

        }

    }
);


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeTaskModal();

            closeCategoryModal();

        }

    }
);


/* =====================================================
   INITIAL DATE
===================================================== */

document.getElementById(
    "datePicker"
).value =
    dateKey(
        new Date()
    );


/* =====================================================
   INITIAL RENDER
===================================================== */

render();