/* =====================================================
   7 DAY LIFE TRACKER
   Dynamic Category + Task System
===================================================== */


/* =====================================================
   STORAGE
===================================================== */

const STORAGE_KEY = "life_tracker_dynamic_v1";


/* =====================================================
   DEFAULT DATA
===================================================== */

const DEFAULT_DATA = {

    categories: [

        {
            id: "job",
            name: "Job / Office",
            icon: "💼",
            color: "#2563eb"
        },

        {
            id: "german",
            name: "German",
            icon: "🇩🇪",
            color: "#7c3aed"
        },

        {
            id: "programming",
            name: "Programming",
            icon: "💻",
            color: "#ea580c"
        },

        {
            id: "university",
            name: "University",
            icon: "🎓",
            color: "#0f766e"
        },

        {
            id: "rest",
            name: "Rest",
            icon: "😴",
            color: "#64748b"
        }

    ],


    tasks: {

        Saturday: [

            {
                id: "sat1",
                name: "Office",
                description: "Office 9:00 AM - 6:00 PM",
                category: "job",
                time: "9:00 AM - 6:00 PM"
            },

            {
                id: "sat2",
                name: "Programming Practice",
                description: "Programming Practice - 1 Hour",
                category: "programming",
                time: "1 Hour"
            },

            {
                id: "sat3",
                name: "German Vocabulary",
                description: "German Vocabulary - 30 Minutes",
                category: "german",
                time: "30 Minutes"
            },

            {
                id: "sat4",
                name: "Rest / Recovery",
                description: "Rest / Recovery",
                category: "rest",
                time: ""
            }

        ],


        Sunday: [

            {
                id: "sun1",
                name: "Office",
                description: "Office 9:00 AM - 6:00 PM",
                category: "job",
                time: "9:00 AM - 6:00 PM"
            },

            {
                id: "sun2",
                name: "University Study",
                description: "University Study - 1 Hour",
                category: "university",
                time: "1 Hour"
            },

            {
                id: "sun3",
                name: "German Class",
                description: "German Class",
                category: "german",
                time: "7:00 PM - 9:00 PM"
            },

            {
                id: "sun4",
                name: "Rest",
                description: "Rest",
                category: "rest",
                time: ""
            }

        ],


        Monday: [

            {
                id: "mon1",
                name: "Office",
                description: "Office 9:00 AM - 6:00 PM",
                category: "job",
                time: "9:00 AM - 6:00 PM"
            },

            {
                id: "mon2",
                name: "University Study",
                description: "University Study - 1 Hour",
                category: "university",
                time: "1 Hour"
            },

            {
                id: "mon3",
                name: "Programming Practice",
                description: "Programming Practice - 1 Hour",
                category: "programming",
                time: "1 Hour"
            },

            {
                id: "mon4",
                name: "Rest",
                description: "Rest",
                category: "rest",
                time: ""
            }

        ],


        Tuesday: [

            {
                id: "tue1",
                name: "Office",
                description: "Office 9:00 AM - 6:00 PM",
                category: "job",
                time: "9:00 AM - 6:00 PM"
            },

            {
                id: "tue2",
                name: "University Study",
                description: "University Study - 1 Hour",
                category: "university",
                time: "1 Hour"
            },

            {
                id: "tue3",
                name: "German Class",
                description: "German Class",
                category: "german",
                time: "7:00 PM - 9:00 PM"
            },

            {
                id: "tue4",
                name: "German Revision",
                description: "German Revision - 30 Minutes",
                category: "german",
                time: "30 Minutes"
            }

        ],


        Wednesday: [

            {
                id: "wed1",
                name: "Office",
                description: "Office 9:00 AM - 6:00 PM",
                category: "job",
                time: "9:00 AM - 6:00 PM"
            },

            {
                id: "wed2",
                name: "University Study",
                description: "University Study - 1 Hour",
                category: "university",
                time: "1 Hour"
            },

            {
                id: "wed3",
                name: "Programming Practice",
                description: "Programming Practice - 1 Hour",
                category: "programming",
                time: "1 Hour"
            },

            {
                id: "wed4",
                name: "Rest",
                description: "Rest",
                category: "rest",
                time: ""
            }

        ],


        Thursday: [

            {
                id: "thu1",
                name: "Office",
                description: "Office 9:00 AM - 6:00 PM",
                category: "job",
                time: "9:00 AM - 6:00 PM"
            },

            {
                id: "thu2",
                name: "University Study",
                description: "University Study - 1 Hour",
                category: "university",
                time: "1 Hour"
            },

            {
                id: "thu3",
                name: "German Class",
                description: "German Class",
                category: "german",
                time: "7:00 PM - 9:00 PM"
            },

            {
                id: "thu4",
                name: "German Revision",
                description: "German Revision - 30 Minutes",
                category: "german",
                time: "30 Minutes"
            }

        ],


        Friday: [

            {
                id: "fri1",
                name: "University Study",
                description: "University Study - 2 Hours",
                category: "university",
                time: "2 Hours"
            },

            {
                id: "fri2",
                name: "Programming Practice",
                description: "Programming Practice - 2 Hours",
                category: "programming",
                time: "2 Hours"
            },

            {
                id: "fri3",
                name: "Outdoor / Family Time",
                description: "Outdoor / Family Time",
                category: "rest",
                time: ""
            },

            {
                id: "fri4",
                name: "Weekly Revision",
                description: "Weekly Revision",
                category: "university",
                time: ""
            },

            {
                id: "fri5",
                name: "Full Rest",
                description: "Full Rest",
                category: "rest",
                time: ""
            }

        ]

    },


    completed: {}

};


/* =====================================================
   DAYS
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
   LOAD DATA
===================================================== */

let data =
    JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    );


if (!data) {

    data =
        JSON.parse(
            JSON.stringify(DEFAULT_DATA)
        );

    save();

}


/* =====================================================
   SELECTED DATE
===================================================== */

let selectedDate =
    new Date();


/* =====================================================
   EDIT STATES
===================================================== */

let editingCategoryId = null;

let editingTaskId = null;


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

    return `${year}-${month}-${day}`;

}


/* =====================================================
   FORMAT DATE
===================================================== */

function formatDate(date) {

    return date.toLocaleDateString(
        "en-GB",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =====================================================
   GET DAY NAME
===================================================== */

function getDayName(date) {

    return new Intl.DateTimeFormat(
        "en-US",
        {
            weekday: "long"
        }
    ).format(date);

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
        d.getDate() - difference
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
            new Date(saturday);

        d.setDate(
            saturday.getDate() + i
        );

        dates.push(d);

    }


    return dates;

}


/* =====================================================
   TASK COMPLETE KEY
===================================================== */

function completionKey(
    date,
    taskId
) {

    return (
        dateKey(date)
        + "_"
        + taskId
    );

}


/* =====================================================
   GET TASKS
===================================================== */

function getTasksForDate(date) {

    const dayName =
        getDayName(date);

    return data.tasks[dayName] || [];

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
   RENDER ALL
===================================================== */

function render() {

    const dates =
        getWeekDates(
            selectedDate
        );


    document.getElementById(
        "weekLabel"
    ).textContent =

        formatDate(dates[0])
        + " - "
        + formatDate(dates[6]);


    renderCalendar(dates);

    renderTasks(selectedDate);

    renderDashboard(dates);

}


/* =====================================================
   CALENDAR
===================================================== */

function renderCalendar(dates) {

    const week =
        document.getElementById(
            "week"
        );


    week.innerHTML = "";


    dates.forEach(
        date => {

            const tasks =
                getTasksForDate(date);


            let done = 0;


            tasks.forEach(
                task => {

                    if (
                        data.completed[
                            completionKey(
                                date,
                                task.id
                            )
                        ]
                    ) {

                        done++;

                    }

                }
            );


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


            if (
                dateKey(date)
                ===
                dateKey(selectedDate)
            ) {

                card.classList.add(
                    "selected"
                );

            }


            if (
                dateKey(date)
                ===
                dateKey(new Date())
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
                        style="width:${percent}%"
                    ></div>

                </div>

            `;


            card.onclick =
                () => {

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


            week.appendChild(card);

        }
    );

}


/* =====================================================
   TASK LIST
===================================================== */

function renderTasks(date) {

    const dayName =
        getDayName(date);


    const tasks =
        getTasksForDate(date);


    document.getElementById(
        "selectedDayTitle"
    ).textContent =

        dayName
        + " - "
        + formatDate(date);


    const list =
        document.getElementById(
            "taskList"
        );


    list.innerHTML = "";


    if (!tasks.length) {

        list.innerHTML = `

            <div class="empty-state">

                <strong>
                    No tasks for this day
                </strong>

                <span>
                    Create your own routine by
                    clicking "+ Add Task".
                </span>

            </div>

        `;

        return;

    }


    tasks.forEach(
        task => {

            const key =
                completionKey(
                    date,
                    task.id
                );


            const checked =
                data.completed[key]
                === true;


            const category =
                data.categories.find(
                    c =>
                        c.id ===
                        task.category
                );


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "task";


            if (checked) {

                row.classList.add(
                    "completed"
                );

            }


            row.innerHTML = `

                <input
                    type="checkbox"
                    ${checked ? "checked" : ""}
                >


                <div class="task-info">

                    <div class="task-name">
                        ${escapeHTML(task.name)}
                    </div>

                    ${
                        task.description
                            ? `
                            <div class="task-description">
                                ${escapeHTML(task.description)}
                            </div>
                            `
                            : ""
                    }


                    ${
                        category
                            ? `
                            <span
                                class="task-category"
                                style="
                                    color:${category.color}
                                "
                            >
                                ${category.icon}
                                ${escapeHTML(category.name)}
                            </span>
                            `
                            : ""
                    }


                    ${
                        task.time
                            ? `
                            <div class="task-time">
                                🕒 ${escapeHTML(task.time)}
                            </div>
                            `
                            : ""
                    }

                </div>


                <div class="task-actions">

                    <button
                        class="task-action"
                        onclick="
                            openTaskModal('${task.id}')
                        "
                    >
                        ✏️
                    </button>


                    <button
                        class="task-action delete"
                        onclick="
                            deleteTask('${task.id}')
                        "
                    >
                        🗑️
                    </button>

                </div>

            `;


            row.querySelector(
                "input"
            ).addEventListener(
                "change",
                function () {

                    data.completed[key] =
                        this.checked;

                    save();

                    render();

                }
            );


            list.appendChild(row);

        }
    );

}


/* =====================================================
   DASHBOARD
===================================================== */

function renderDashboard(dates) {

    let total = 0;

    let completed = 0;


    dates.forEach(
        date => {

            const tasks =
                getTasksForDate(date);


            tasks.forEach(
                task => {

                    total++;


                    if (
                        data.completed[
                            completionKey(
                                date,
                                task.id
                            )
                        ]
                    ) {

                        completed++;

                    }

                }
            );

        }
    );


    document.getElementById(
        "overall"
    ).textContent =

        percentage(
            completed,
            total
        ) + "%";


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
        + " 🔥";


    renderCategoryProgress(dates);

}


/* =====================================================
   CATEGORY PROGRESS
===================================================== */

function renderCategoryProgress(dates) {

    const container =
        document.getElementById(
            "categoryProgress"
        );


    container.innerHTML = "";


    if (!data.categories.length) {

        container.innerHTML = `

            <div class="empty-state">

                <strong>
                    No categories
                </strong>

                <span>
                    Create a category first.
                </span>

            </div>

        `;

        return;

    }


    data.categories.forEach(
        category => {

            let total = 0;

            let done = 0;


            dates.forEach(
                date => {

                    const tasks =
                        getTasksForDate(date);


                    tasks.forEach(
                        task => {

                            if (
                                task.category
                                ===
                                category.id
                            ) {

                                total++;


                                if (
                                    data.completed[
                                        completionKey(
                                            date,
                                            task.id
                                        )
                                    ]
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


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "progress-item";


            item.innerHTML = `

                <div class="progress-header">

                    <div class="progress-label">

                        <span>
                            ${category.icon}
                        </span>

                        <span>
                            ${escapeHTML(category.name)}
                        </span>

                    </div>

                    <b>
                        ${percent}%
                    </b>

                </div>


                <div class="progress-bar">

                    <div
                        class="progress"
                        style="
                            width:${percent}%;
                            background:${category.color};
                        "
                    ></div>

                </div>

            `;


            container.appendChild(item);

        }
    );

}


/* =====================================================
   CATEGORY MANAGER
===================================================== */

function openCategoryManager() {

    renderCategoryList();


    document.getElementById(
        "categoryModal"
    ).classList.remove(
        "hidden"
    );

}


function closeCategoryManager() {

    document.getElementById(
        "categoryModal"
    ).classList.add(
        "hidden"
    );

}


/* =====================================================
   CATEGORY LIST
===================================================== */

function renderCategoryList() {

    const list =
        document.getElementById(
            "categoryList"
        );


    list.innerHTML = "";


    if (!data.categories.length) {

        list.innerHTML = `

            <div class="empty-state">

                <strong>
                    No categories yet
                </strong>

            </div>

        `;

        return;

    }


    data.categories.forEach(
        category => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "category-item";


            item.innerHTML = `

                <span
                    class="category-color"
                    style="
                        background:${category.color}
                    "
                ></span>


                <span class="category-icon">
                    ${category.icon}
                </span>


                <span class="category-name">
                    ${escapeHTML(category.name)}
                </span>


                <div class="category-actions">

                    <button
                        onclick="
                            editCategory('${category.id}')
                        "
                    >
                        ✏️
                    </button>


                    <button
                        onclick="
                            deleteCategory('${category.id}')
                        "
                    >
                        🗑️
                    </button>

                </div>

            `;


            list.appendChild(item);

        }
    );

}


/* =====================================================
   CATEGORY FORM
===================================================== */

function openCategoryForm(categoryId = null) {

    editingCategoryId =
        categoryId;


    document.getElementById(
        "categoryFormTitle"
    ).textContent =

        categoryId
            ? "Edit Category"
            : "Add Category";


    if (categoryId) {

        const category =
            data.categories.find(
                c =>
                    c.id ===
                    categoryId
            );


        if (!category) {

            return;

        }


        document.getElementById(
            "categoryName"
        ).value =
            category.name;


        document.getElementById(
            "categoryIcon"
        ).value =
            category.icon;


        document.getElementById(
            "categoryColor"
        ).value =
            category.color;

    } else {

        document.getElementById(
            "categoryForm"
        ).reset();


        document.getElementById(
            "categoryColor"
        ).value =
            "#2563eb";

    }


    document.getElementById(
        "categoryFormModal"
    ).classList.remove(
        "hidden"
    );

}


function closeCategoryForm() {

    document.getElementById(
        "categoryFormModal"
    ).classList.add(
        "hidden"
    );


    editingCategoryId =
        null;

}


/* =====================================================
   CATEGORY EDIT
===================================================== */

function editCategory(id) {

    openCategoryForm(id);

}


/* =====================================================
   CATEGORY SAVE
===================================================== */

document.getElementById(
    "categoryForm"
).addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "categoryName"
            ).value.trim();


        const icon =
            document.getElementById(
                "categoryIcon"
            ).value.trim()
            || "📌";


        const color =
            document.getElementById(
                "categoryColor"
            ).value;


        if (!name) {

            return;

        }


        if (editingCategoryId) {

            const category =
                data.categories.find(
                    c =>
                        c.id
                        ===
                        editingCategoryId
                );


            if (category) {

                category.name =
                    name;

                category.icon =
                    icon;

                category.color =
                    color;

            }

        } else {

            const newCategory = {

                id:
                    "cat_" +
                    Date.now(),

                name:
                    name,

                icon:
                    icon,

                color:
                    color

            };


            data.categories.push(
                newCategory
            );

        }


        save();

        closeCategoryForm();

        renderCategoryList();

        render();

    }
);


/* =====================================================
   CATEGORY DELETE
===================================================== */

function deleteCategory(id) {

    const category =
        data.categories.find(
            c =>
                c.id === id
        );


    if (!category) {

        return;

    }


    const hasTasks =
        Object.values(
            data.tasks
        )
        .flat()
        .some(
            task =>
                task.category
                === id
        );


    let message =

        `Delete "${category.name}" category?`;


    if (hasTasks) {

        message +=

            `\n\nThis category is used by existing tasks.
Those tasks will also be deleted.`;

    }


    if (
        !confirm(message)
    ) {

        return;

    }


    data.categories =
        data.categories.filter(
            c =>
                c.id !== id
        );


    Object.keys(
        data.tasks
    ).forEach(
        day => {

            data.tasks[day] =
                data.tasks[day].filter(
                    task =>
                        task.category
                        !== id
                );

        }
    );


    save();

    renderCategoryList();

    render();

}


/* =====================================================
   TASK MODAL
===================================================== */

function openTaskModal(taskId = null) {

    editingTaskId =
        taskId;


    populateCategorySelect();


    document.getElementById(
        "taskFormTitle"
    ).textContent =

        taskId
            ? "Edit Task"
            : "Add Task";


    if (taskId) {

        const tasks =
            getTasksForDate(
                selectedDate
            );


        const task =
            tasks.find(
                t =>
                    t.id ===
                    taskId
            );


        if (!task) {

            return;

        }


        document.getElementById(
            "taskName"
        ).value =
            task.name;


        document.getElementById(
            "taskDescription"
        ).value =
            task.description;


        document.getElementById(
            "taskCategory"
        ).value =
            task.category;


        document.getElementById(
            "taskTime"
        ).value =
            task.time;

    } else {

        document.getElementById(
            "taskForm"
        ).reset();

    }


    document.getElementById(
        "taskModal"
    ).classList.remove(
        "hidden"
    );

}


/* =====================================================
   CLOSE TASK
===================================================== */

function closeTaskModal() {

    document.getElementById(
        "taskModal"
    ).classList.add(
        "hidden"
    );


    editingTaskId =
        null;

}


/* =====================================================
   CATEGORY SELECT
===================================================== */

function populateCategorySelect() {

    const select =
        document.getElementById(
            "taskCategory"
        );


    select.innerHTML = "";


    if (!data.categories.length) {

        select.innerHTML = `

            <option value="">
                Create a category first
            </option>

        `;

        return;

    }


    data.categories.forEach(
        category => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                category.id;


            option.textContent =

                category.icon
                + " "
                + category.name;


            select.appendChild(
                option
            );

        }
    );

}


/* =====================================================
   TASK SAVE
===================================================== */

document.getElementById(
    "taskForm"
).addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "taskName"
            ).value.trim();


        const description =
            document.getElementById(
                "taskDescription"
            ).value.trim();


        const category =
            document.getElementById(
                "taskCategory"
            ).value;


        const time =
            document.getElementById(
                "taskTime"
            ).value.trim();


        const dayName =
            getDayName(
                selectedDate
            );


        if (
            !data.tasks[dayName]
        ) {

            data.tasks[dayName] = [];

        }


        if (editingTaskId) {

            const task =
                data.tasks[dayName].find(
                    t =>
                        t.id
                        ===
                        editingTaskId
                );


            if (task) {

                task.name =
                    name;

                task.description =
                    description;

                task.category =
                    category;

                task.time =
                    time;

            }

        } else {

            data.tasks[dayName].push({

                id:
                    "task_" +
                    Date.now(),

                name:
                    name,

                description:
                    description,

                category:
                    category,

                time:
                    time

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

function deleteTask(taskId) {

    const dayName =
        getDayName(
            selectedDate
        );


    const task =
        data.tasks[dayName].find(
            t =>
                t.id === taskId
        );


    if (!task) {

        return;

    }


    if (
        !confirm(
            `Delete "${task.name}"?`
        )
    ) {

        return;

    }


    data.tasks[dayName] =
        data.tasks[dayName].filter(
            t =>
                t.id !== taskId
        );


    delete data.completed[
        completionKey(
            selectedDate,
            taskId
        )
    ];


    save();

    render();

}


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
    function () {

        if (!this.value) {

            return;

        }


        const parts =
            this.value.split("-");


        selectedDate =
            new Date(
                Number(parts[0]),
                Number(parts[1]) - 1,
                Number(parts[2])
            );


        render();

    }
);


/* =====================================================
   STREAK
===================================================== */

function isDayCompleted(date) {

    const tasks =
        getTasksForDate(date);


    if (!tasks.length) {

        return false;

    }


    return tasks.every(
        task => {

            return (
                data.completed[
                    completionKey(
                        date,
                        task.id
                    )
                ]
                === true
            );

        }
    );

}


function calculateStreak() {

    let date =
        new Date();


    date.setHours(
        0,
        0,
        0,
        0
    );


    let streak = 0;


    if (
        !isDayCompleted(date)
    ) {

        date.setDate(
            date.getDate() - 1
        );

    }


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        if (
            isDayCompleted(date)
        ) {

            streak++;

            date.setDate(
                date.getDate() - 1
            );

        } else {

            break;

        }

    }


    return streak;

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

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
   CLOSE MODAL BY CLICKING OUTSIDE
===================================================== */

document
    .getElementById("categoryModal")
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target === this
            ) {

                closeCategoryManager();

            }

        }
    );


document
    .getElementById("categoryFormModal")
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target === this
            ) {

                closeCategoryForm();

            }

        }
    );


document
    .getElementById("taskModal")
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target === this
            ) {

                closeTaskModal();

            }

        }
    );


/* =====================================================
   INITIAL LOAD
===================================================== */

document.getElementById(
    "datePicker"
).value =
    dateKey(
        new Date()
    );


render();