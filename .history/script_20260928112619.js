/* =====================================================
   7-DAY LIFE TRACKER
   Custom Routine / Categories / Tasks
===================================================== */


/* =====================================================
   CONSTANTS
===================================================== */

const STORAGE_KEY = "life_tracker_custom_v3";

const OLD_STORAGE_KEY = "professional_7_day_tracker";


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
        id: "university",
        name: "University",
        icon: "🎓",
        color: "#0f766e"
    },

    {
        id: "programming",
        name: "Programming",
        icon: "💻",
        color: "#ea580c"
    },

    {
        id: "health",
        name: "Health",
        icon: "❤️",
        color: "#dc2626"
    },

    {
        id: "personal",
        name: "Personal",
        icon: "🏠",
        color: "#0891b2"
    },

    {
        id: "rest",
        name: "Rest",
        icon: "😴",
        color: "#64748b"
    }

];


/* =====================================================
   DEFAULT TASKS
===================================================== */

const DEFAULT_TASKS = {

    Saturday: [

        {
            id: "sat-job",
            title: "Office",
            description: "Office 9:00 AM - 6:00 PM",
            category: "job",
            time: "9:00 AM - 6:00 PM"
        },

        {
            id: "sat-programming",
            title: "Programming Practice",
            description: "Practice programming for 1 hour",
            category: "programming",
            time: "1 Hour"
        },

        {
            id: "sat-german",
            title: "German Vocabulary",
            description: "German vocabulary practice",
            category: "german",
            time: "30 Minutes"
        },

        {
            id: "sat-rest",
            title: "Rest / Recovery",
            description: "Relax and recover",
            category: "rest",
            time: ""
        }

    ],


    Sunday: [

        {
            id: "sun-job",
            title: "Office",
            description: "Office 9:00 AM - 6:00 PM",
            category: "job",
            time: "9:00 AM - 6:00 PM"
        },

        {
            id: "sun-university",
            title: "University Study",
            description: "University study",
            category: "university",
            time: "1 Hour"
        },

        {
            id: "sun-german",
            title: "German Class",
            description: "German class",
            category: "german",
            time: "7:00 PM - 9:00 PM"
        },

        {
            id: "sun-rest",
            title: "Rest",
            description: "Rest",
            category: "rest",
            time: ""
        }

    ],


    Monday: [

        {
            id: "mon-job",
            title: "Office",
            description: "Office 9:00 AM - 6:00 PM",
            category: "job",
            time: "9:00 AM - 6:00 PM"
        },

        {
            id: "mon-university",
            title: "University Study",
            description: "University study",
            category: "university",
            time: "1 Hour"
        },

        {
            id: "mon-programming",
            title: "Programming Practice",
            description: "Practice programming",
            category: "programming",
            time: "1 Hour"
        },

        {
            id: "mon-rest",
            title: "Rest",
            description: "Rest",
            category: "rest",
            time: ""
        }

    ],


    Tuesday: [

        {
            id: "tue-job",
            title: "Office",
            description: "Office 9:00 AM - 6:00 PM",
            category: "job",
            time: "9:00 AM - 6:00 PM"
        },

        {
            id: "tue-university",
            title: "University Study",
            description: "University study",
            category: "university",
            time: "1 Hour"
        },

        {
            id: "tue-german",
            title: "German Class",
            description: "German class",
            category: "german",
            time: "7:00 PM - 9:00 PM"
        },

        {
            id: "tue-revision",
            title: "German Revision",
            description: "Review German lessons",
            category: "german",
            time: "30 Minutes"
        }

    ],


    Wednesday: [

        {
            id: "wed-job",
            title: "Office",
            description: "Office 9:00 AM - 6:00 PM",
            category: "job",
            time: "9:00 AM - 6:00 PM"
        },

        {
            id: "wed-university",
            title: "University Study",
            description: "University study",
            category: "university",
            time: "1 Hour"
        },

        {
            id: "wed-programming",
            title: "Programming Practice",
            description: "Practice programming",
            category: "programming",
            time: "1 Hour"
        },

        {
            id: "wed-rest",
            title: "Rest",
            description: "Rest",
            category: "rest",
            time: ""
        }

    ],


    Thursday: [

        {
            id: "thu-job",
            title: "Office",
            description: "Office 9:00 AM - 6:00 PM",
            category: "job",
            time: "9:00 AM - 6:00 PM"
        },

        {
            id: "thu-university",
            title: "University Study",
            description: "University study",
            category: "university",
            time: "1 Hour"
        },

        {
            id: "thu-german",
            title: "German Class",
            description: "German class",
            category: "german",
            time: "7:00 PM - 9:00 PM"
        },

        {
            id: "thu-revision",
            title: "German Revision",
            description: "Review German lessons",
            category: "german",
            time: "30 Minutes"
        }

    ],


    Friday: [

        {
            id: "fri-university",
            title: "University Study",
            description: "Weekly study session",
            category: "university",
            time: "2 Hours"
        },

        {
            id: "fri-programming",
            title: "Programming Practice",
            description: "Programming practice",
            category: "programming",
            time: "2 Hours"
        },

        {
            id: "fri-outdoor",
            title: "Outdoor / Family Time",
            description: "Spend time outside or with family",
            category: "personal",
            time: ""
        },

        {
            id: "fri-revision",
            title: "Weekly Revision",
            description: "Review the whole week",
            category: "university",
            time: ""
        },

        {
            id: "fri-rest",
            title: "Full Rest",
            description: "Full recovery day",
            category: "rest",
            time: ""
        }

    ]

};


/* =====================================================
   STATE
===================================================== */

let state = loadState();


let selectedDate = new Date();


/* =====================================================
   LOAD STATE
===================================================== */

function loadState() {

    const saved =
        localStorage.getItem(STORAGE_KEY);


    if (saved) {

        try {

            const parsed =
                JSON.parse(saved);

            return normalizeState(parsed);

        } catch (error) {

            console.error(
                "Could not load saved data",
                error
            );

        }

    }


    /*
       Try to migrate old tracker.
    */

    const oldSaved =
        localStorage.getItem(
            OLD_STORAGE_KEY
        );


    if (oldSaved) {

        try {

            const oldData =
                JSON.parse(oldSaved);


            const migrated =
                createDefaultState();


            /*
               Old system used:
               date_index : true
            */

            Object.keys(oldData).forEach(
                key => {

                    if (
                        key.includes("_")
                    ) {

                        const parts =
                            key.split("_");

                        const index =
                            Number(
                                parts.pop()
                            );

                        const date =
                            parts.join("_");


                        if (
                            !Number.isNaN(index) &&
                            oldData[key] === true
                        ) {

                            const day =
                                new Date(
                                    date + "T00:00:00"
                                );


                            if (
                                !Number.isNaN(
                                    day.getTime()
                                )
                            ) {

                                const dayName =
                                    getDayName(day);


                                const tasks =
                                    migrated.tasks[
                                        dayName
                                    ] || [];


                                if (
                                    tasks[index]
                                ) {

                                    const taskId =
                                        tasks[index].id;


                                    migrated.completed[
                                        completionKey(
                                            date,
                                            taskId
                                        )
                                    ] = true;

                                }

                            }

                        }

                    }

                }
            );


            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(migrated)
            );


            return migrated;

        } catch (error) {

            console.error(
                "Migration failed",
                error
            );

        }

    }


    return createDefaultState();

}


/* =====================================================
   CREATE DEFAULT STATE
===================================================== */

function createDefaultState() {

    return {

        categories:
            structuredClone(
                DEFAULT_CATEGORIES
            ),

        tasks:
            structuredClone(
                DEFAULT_TASKS
            ),

        completed: {}

    };

}


/* =====================================================
   NORMALIZE STATE
===================================================== */

function normalizeState(saved) {

    const defaultState =
        createDefaultState();


    return {

        categories:
            Array.isArray(
                saved.categories
            )
                ? saved.categories
                : defaultState.categories,


        tasks:
            saved.tasks &&
            typeof saved.tasks === "object"
                ? saved.tasks
                : defaultState.tasks,


        completed:
            saved.completed &&
            typeof saved.completed === "object"
                ? saved.completed
                : {}

    };

}


/* =====================================================
   SAVE
===================================================== */

function saveState() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );

}


/* =====================================================
   DATE FUNCTIONS
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


function getDayName(date) {

    return new Intl.DateTimeFormat(
        "en-US",
        {
            weekday: "long"
        }
    ).format(date);

}


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
   SATURDAY WEEK
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
   COMPLETION KEY
===================================================== */

function completionKey(
    date,
    taskId
) {

    return `${dateKey(date)}__${taskId}`;

}


function isTaskCompleted(
    date,
    taskId
) {

    return (
        state.completed[
            completionKey(
                date,
                taskId
            )
        ] === true
    );

}


function setTaskCompleted(
    date,
    taskId,
    value
) {

    state.completed[
        completionKey(
            date,
            taskId
        )
    ] = value;

}


/* =====================================================
   HELPERS
===================================================== */

function getTasksForDate(date) {

    const dayName =
        getDayName(date);


    return (
        state.tasks[dayName] || []
    );

}


function getCategory(categoryId) {

    return state.categories.find(
        category =>
            category.id === categoryId
    );

}


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


function generateId(prefix) {

    return (
        prefix +
        "_" +
        Date.now() +
        "_" +
        Math.random()
            .toString(36)
            .substring(2, 8)
    );

}


/* =====================================================
   HTML SECURITY
===================================================== */

function escapeHTML(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =====================================================
   MAIN RENDER
===================================================== */

function render() {

    const dates =
        getWeekDates(
            selectedDate
        );


    document.getElementById(
        "weekLabel"
    ).textContent =
        `${formatDate(dates[0])} - ${formatDate(dates[6])}`;


    document.getElementById(
        "datePicker"
    ).value =
        dateKey(
            selectedDate
        );


    renderCalendar(dates);

    renderTasks(selectedDate);

    renderDashboard(dates);

    renderCategoryProgress(dates);

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

            const dayName =
                getDayName(date);


            const tasks =
                state.tasks[dayName] || [];


            let completed = 0;


            tasks.forEach(
                task => {

                    if (
                        isTaskCompleted(
                            date,
                            task.id
                        )
                    ) {

                        completed++;

                    }

                }
            );


            const percent =
                percentage(
                    completed,
                    tasks.length
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "day-card";


            if (
                dateKey(date) ===
                dateKey(selectedDate)
            ) {

                card.classList.add(
                    "selected"
                );

            }


            if (
                dateKey(date) ===
                dateKey(new Date())
            ) {

                card.classList.add(
                    "today"
                );

            }


            card.innerHTML = `

                <div class="day-name">
                    ${escapeHTML(dayName)}
                </div>

                <div class="day-date">
                    ${escapeHTML(
                        formatDate(date)
                    )}
                </div>

                <div class="day-percent">
                    ${percent}%
                </div>

                <div class="mini-bar">

                    <div
                        class="mini-fill"
                        style="width:${percent}%">
                    </div>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    selectedDate =
                        new Date(date);

                    render();

                }
            );


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
        state.tasks[dayName] || [];


    document.getElementById(
        "selectedDayTitle"
    ).textContent =
        `${dayName} - ${formatDate(date)}`;


    document.getElementById(
        "selectedDaySubtitle"
    ).textContent =
        `${tasks.length} task${tasks.length !== 1 ? "s" : ""} planned for this day`;


    const list =
        document.getElementById(
            "taskList"
        );


    list.innerHTML = "";


    if (!tasks.length) {

        list.innerHTML = `

            <div class="empty-state">

                <div style="font-size:34px;">
                    📝
                </div>

                <p>
                    No tasks for ${escapeHTML(dayName)}.
                </p>

                <p style="font-size:11px;margin-top:5px;">
                    Click "+ Add Task" to create your routine.
                </p>

            </div>

        `;

        return;

    }


    tasks.forEach(
        task => {

            const completed =
                isTaskCompleted(
                    date,
                    task.id
                );


            const category =
                getCategory(
                    task.category
                );


            const categoryName =
                category
                    ? category.name
                    : "Uncategorized";


            const categoryIcon =
                category
                    ? category.icon
                    : "📌";


            const categoryColor =
                category
                    ? category.color
                    : "#64748b";


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "task" +
                (
                    completed
                        ? " completed"
                        : ""
                );


            row.innerHTML = `

                <input
                    class="task-checkbox"
                    type="checkbox"
                    ${completed ? "checked" : ""}
                    aria-label="Complete task">


                <div class="task-info">

                    <div class="task-name">
                        ${escapeHTML(
                            task.title
                        )}
                    </div>


                    ${
                        task.description
                            ? `
                                <div class="task-description">
                                    ${escapeHTML(
                                        task.description
                                    )}
                                </div>
                              `
                            : ""
                    }


                    <div class="task-meta">

                        <span
                            class="category-badge"
                            style="
                                background:${hexToRGBA(
                                    categoryColor,
                                    .10
                                )};
                                color:${categoryColor};
                            ">

                            ${escapeHTML(
                                categoryIcon
                            )}

                            ${escapeHTML(
                                categoryName
                            )}

                        </span>


                        ${
                            task.time
                                ? `
                                    <span class="time-badge">
                                        🕒 ${escapeHTML(
                                            task.time
                                        )}
                                    </span>
                                  `
                                : ""
                        }

                    </div>

                </div>


                <div class="task-actions">

                    <button
                        class="small-btn edit-task"
                        title="Edit">
                        ✏️
                    </button>


                    <button
                        class="small-btn delete-task"
                        title="Delete">
                        🗑️
                    </button>

                </div>

            `;


            const checkbox =
                row.querySelector(
                    ".task-checkbox"
                );


            checkbox.addEventListener(
                "change",
                () => {

                    setTaskCompleted(
                        date,
                        task.id,
                        checkbox.checked
                    );


                    saveState();

                    render();

                    showToast(
                        checkbox.checked
                            ? "Task completed ✓"
                            : "Task marked incomplete"
                    );

                }
            );


            row.querySelector(
                ".edit-task"
            ).addEventListener(
                "click",
                () => {

                    openEditTask(
                        task.id
                    );

                }
            );


            row.querySelector(
                ".delete-task"
            ).addEventListener(
                "click",
                () => {

                    deleteTask(
                        dayName,
                        task.id
                    );

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


            total += tasks.length;


            tasks.forEach(
                task => {

                    if (
                        isTaskCompleted(
                            date,
                            task.id
                        )
                    ) {

                        completed++;

                    }

                }
            );

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
        `${percent}%`;


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
        `${calculateStreak()} 🔥`;

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


    if (!state.categories.length) {

        container.innerHTML = `

            <div class="progress-empty">
                No categories created yet.
            </div>

        `;

        return;

    }


    const stats = {};


    state.categories.forEach(
        category => {

            stats[
                category.id
            ] = {

                total: 0,
                done: 0

            };

        }
    );


    dates.forEach(
        date => {

            const tasks =
                getTasksForDate(date);


            tasks.forEach(
                task => {

                    if (
                        !stats[
                            task.category
                        ]
                    ) {

                        return;

                    }


                    stats[
                        task.category
                    ].total++;


                    if (
                        isTaskCompleted(
                            date,
                            task.id
                        )
                    ) {

                        stats[
                            task.category
                        ].done++;

                    }

                }
            );

        }
    );


    state.categories.forEach(
        category => {

            const value =
                stats[
                    category.id
                ];


            /*
               Hide categories which have
               no task this week.
            */

            if (!value.total) {

                return;

            }


            const percent =
                percentage(
                    value.done,
                    value.total
                );


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "progress-item";


            item.innerHTML = `

                <div class="progress-top">

                    <div class="progress-label">

                        <span>
                            ${escapeHTML(
                                category.icon
                            )}
                        </span>

                        <span>
                            ${escapeHTML(
                                category.name
                            )}
                        </span>

                    </div>


                    <div
                        class="progress-percent">

                        ${percent}%

                    </div>

                </div>


                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        style="
                            width:${percent}%;
                            background:${category.color};
                        ">
                    </div>

                </div>

            `;


            container.appendChild(item);

        }
    );


    if (!container.children.length) {

        container.innerHTML = `

            <div class="progress-empty">

                No category tasks
                scheduled this week.

            </div>

        `;

    }

}


/* =====================================================
   STREAK
===================================================== */

function isDayCompleted(date) {

    const tasks =
        getTasksForDate(date);


    /*
       Empty day should not count as
       completed streak.
    */

    if (!tasks.length) {

        return false;

    }


    return tasks.every(
        task =>
            isTaskCompleted(
                date,
                task.id
            )
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
        i < 365;
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
   CATEGORY MODAL
===================================================== */

function openCategoryModal() {

    renderCategoryList();

    openModal(
        "categoryModal"
    );

}


function renderCategoryList() {

    const list =
        document.getElementById(
            "categoryList"
        );


    list.innerHTML = "";


    if (!state.categories.length) {

        list.innerHTML = `

            <div class="empty-state">
                No categories.
            </div>

        `;

        return;

    }


    state.categories.forEach(
        category => {

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "category-row";


            const taskCount =
                Object.values(
                    state.tasks
                )
                    .flat()
                    .filter(
                        task =>
                            task.category ===
                            category.id
                    )
                    .length;


            row.innerHTML = `

                <div
                    class="category-color"
                    style="
                        background:${category.color};
                    ">
                </div>


                <div class="category-icon">

                    ${escapeHTML(
                        category.icon
                    )}

                </div>


                <div class="category-info">

                    <strong>
                        ${escapeHTML(
                            category.name
                        )}
                    </strong>

                    <span>
                        ${taskCount}
                        task${taskCount !== 1 ? "s" : ""}
                    </span>

                </div>


                <div class="category-actions">

                    <button
                        class="small-btn edit-category"
                        title="Edit">
                        ✏️
                    </button>


                    <button
                        class="small-btn delete-category"
                        title="Delete">
                        🗑️
                    </button>

                </div>

            `;


            row.querySelector(
                ".edit-category"
            ).addEventListener(
                "click",
                () => {

                    openEditCategory(
                        category.id
                    );

                }
            );


            row.querySelector(
                ".delete-category"
            ).addEventListener(
                "click",
                () => {

                    deleteCategory(
                        category.id
                    );

                }
            );


            list.appendChild(row);

        }
    );

}


/* =====================================================
   ADD CATEGORY
===================================================== */

function openAddCategory() {

    document.getElementById(
        "categoryForm"
    ).reset();


    document.getElementById(
        "categoryId"
    ).value = "";


    document.getElementById(
        "categoryColor"
    ).value =
        "#2563eb";


    document.getElementById(
        "categoryFormTitle"
    ).textContent =
        "Add Category";


    openModal(
        "categoryFormModal"
    );

}


/* =====================================================
   EDIT CATEGORY
===================================================== */

function openEditCategory(id) {

    const category =
        getCategory(id);


    if (!category) {

        return;

    }


    document.getElementById(
        "categoryId"
    ).value =
        category.id;


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


    document.getElementById(
        "categoryFormTitle"
    ).textContent =
        "Edit Category";


    openModal(
        "categoryFormModal"
    );

}


/* =====================================================
   SAVE CATEGORY
===================================================== */

document.getElementById(
    "categoryForm"
).addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const id =
            document.getElementById(
                "categoryId"
            ).value.trim();


        const name =
            document.getElementById(
                "categoryName"
            ).value.trim();


        const icon =
            document.getElementById(
                "categoryIcon"
            ).value.trim() ||
            "📌";


        const color =
            document.getElementById(
                "categoryColor"
            ).value;


        if (!name) {

            return;

        }


        if (id) {

            const category =
                getCategory(id);


            if (category) {

                category.name =
                    name;

                category.icon =
                    icon;

                category.color =
                    color;

            }

        } else {

            state.categories.push({

                id:
                    generateId(
                        "cat"
                    ),

                name,
                icon,
                color

            });

        }


        saveState();

        closeModal(
            "categoryFormModal"
        );


        renderCategoryList();

        render();


        showToast(
            id
                ? "Category updated ✓"
                : "Category created ✓"
        );

    }
);


/* =====================================================
   DELETE CATEGORY
===================================================== */

function deleteCategory(id) {

    const category =
        getCategory(id);


    if (!category) {

        return;

    }


    const hasTasks =
        Object.values(
            state.tasks
        )
            .flat()
            .some(
                task =>
                    task.category === id
            );


    if (hasTasks) {

        const shouldDelete =
            confirm(
                `"${category.name}" has tasks assigned to it.\n\nDelete the category and those tasks?`
            );


        if (!shouldDelete) {

            return;

        }


        Object.keys(
            state.tasks
        ).forEach(
            day => {

                state.tasks[day] =
                    state.tasks[day].filter(
                        task =>
                            task.category !== id
                    );

            }
        );

    } else {

        const shouldDelete =
            confirm(
                `Delete "${category.name}"?`
            );


        if (!shouldDelete) {

            return;

        }

    }


    state.categories =
        state.categories.filter(
            item =>
                item.id !== id
        );


    saveState();

    renderCategoryList();

    render();


    showToast(
        "Category deleted"
    );

}


/* =====================================================
   TASK MODAL
===================================================== */

function openAddTask() {

    document.getElementById(
        "taskForm"
    ).reset();


    document.getElementById(
        "taskId"
    ).value = "";


    document.getElementById(
        "taskFormTitle"
    ).textContent =
        "Add Task";


    document.getElementById(
        "taskModalSubtitle"
    ).textContent =
        `Create a task for ${getDayName(selectedDate)}`;


    populateCategorySelect();


    openModal(
        "taskModal"
    );

}


/* =====================================================
   EDIT TASK
===================================================== */

function openEditTask(id) {

    const dayName =
        getDayName(selectedDate);


    const task =
        (
            state.tasks[dayName] ||
            []
        ).find(
            item =>
                item.id === id
        );


    if (!task) {

        return;

    }


    populateCategorySelect(
        task.category
    );


    document.getElementById(
        "taskId"
    ).value =
        task.id;


    document.getElementById(
        "taskTitle"
    ).value =
        task.title;


    document.getElementById(
        "taskDescription"
    ).value =
        task.description;


    document.getElementById(
        "taskTime"
    ).value =
        task.time;


    document.getElementById(
        "taskFormTitle"
    ).textContent =
        "Edit Task";


    document.getElementById(
        "taskModalSubtitle"
    ).textContent =
        `Edit task for ${dayName}`;


    openModal(
        "taskModal"
    );

}


/* =====================================================
   CATEGORY SELECT
===================================================== */

function populateCategorySelect(
    selectedId = ""
) {

    const select =
        document.getElementById(
            "taskCategory"
        );


    select.innerHTML = "";


    state.categories.forEach(
        category => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                category.id;


            option.textContent =
                `${category.icon} ${category.name}`;


            if (
                category.id ===
                selectedId
            ) {

                option.selected =
                    true;

            }


            select.appendChild(
                option
            );

        }
    );


    if (!state.categories.length) {

        const option =
            document.createElement(
                "option"
            );


        option.value = "";

        option.textContent =
            "Create a category first";

        select.appendChild(option);

    }

}


/* =====================================================
   SAVE TASK
===================================================== */

document.getElementById(
    "taskForm"
).addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const id =
            document.getElementById(
                "taskId"
            ).value.trim();


        const title =
            document.getElementById(
                "taskTitle"
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


        if (!title) {

            alert(
                "Please enter a task title."
            );

            return;

        }


        if (!category) {

            alert(
                "Please select a category."
            );

            return;

        }


        const dayName =
            getDayName(
                selectedDate
            );


        if (
            !state.tasks[dayName]
        ) {

            state.tasks[dayName] = [];

        }


        if (id) {

            const task =
                state.tasks[
                    dayName
                ].find(
                    item =>
                        item.id === id
                );


            if (task) {

                task.title =
                    title;

                task.description =
                    description;

                task.category =
                    category;

                task.time =
                    time;

            }

        } else {

            state.tasks[
                dayName
            ].push({

                id:
                    generateId(
                        "task"
                    ),

                title,
                description,
                category,
                time

            });

        }


        saveState();

        closeModal(
            "taskModal"
        );


        render();


        showToast(
            id
                ? "Task updated ✓"
                : "Task added ✓"
        );

    }
);


/* =====================================================
   DELETE TASK
===================================================== */

function deleteTask(
    dayName,
    taskId
) {

    const task =
        (
            state.tasks[dayName] ||
            []
        ).find(
            item =>
                item.id === taskId
        );


    if (!task) {

        return;

    }


    const confirmed =
        confirm(
            `Delete "${task.title}"?`
        );


    if (!confirmed) {

        return;

    }


    state.tasks[dayName] =
        state.tasks[dayName].filter(
            item =>
                item.id !== taskId
        );


    /*
       Remove completion records
       for this task.
    */

    Object.keys(
        state.completed
    ).forEach(
        key => {

            if (
                key.endsWith(
                    `__${taskId}`
                )
            ) {

                delete state.completed[key];

            }

        }
    );


    saveState();

    render();


    showToast(
        "Task deleted"
    );

}


/* =====================================================
   MODALS
===================================================== */

function openModal(id) {

    document.getElementById(
        id
    ).classList.add(
        "active"
    );

}


function closeModal(id) {

    document.getElementById(
        id
    ).classList.remove(
        "active"
    );

}


/* =====================================================
   CLOSE BUTTONS
===================================================== */

document.querySelectorAll(
    "[data-close]"
).forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                closeModal(
                    button.dataset.close
                );

            }
        );

    }
);


/* =====================================================
   CLICK OUTSIDE MODAL
===================================================== */

document.querySelectorAll(
    ".modal-overlay"
).forEach(
    overlay => {

        overlay.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    overlay
                ) {

                    overlay.classList.remove(
                        "active"
                    );

                }

            }
        );

    }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {

            return;

        }


        document.querySelectorAll(
            ".modal-overlay.active"
        ).forEach(
            modal => {

                modal.classList.remove(
                    "active"
                );

            }
        );

    }
);


/* =====================================================
   CATEGORY BUTTONS
===================================================== */

document.getElementById(
    "categoryBtn"
).addEventListener(
    "click",
    openCategoryModal
);


document.getElementById(
    "categorySettingsBtn"
).addEventListener(
    "click",
    openCategoryModal
);


document.getElementById(
    "openAddCategoryBtn"
).addEventListener(
    "click",
    () => {

        openAddCategory();

    }
);


/* =====================================================
   ADD TASK BUTTON
===================================================== */

document.getElementById(
    "addTaskBtn"
).addEventListener(
    "click",
    openAddTask
);


/* =====================================================
   TODAY BUTTON
===================================================== */

document.getElementById(
    "todayBtn"
).addEventListener(
    "click",
    () => {

        selectedDate =
            new Date();


        render();

    }
);


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
   HEX TO RGBA
===================================================== */

function hexToRGBA(
    hex,
    alpha
) {

    let value =
        hex.replace(
            "#",
            ""
        );


    if (
        value.length === 3
    ) {

        value =
            value
                .split("")
                .map(
                    char =>
                        char + char
                )
                .join("");

    }


    const r =
        parseInt(
            value.substring(0, 2),
            16
        );


    const g =
        parseInt(
            value.substring(2, 4),
            16
        );


    const b =
        parseInt(
            value.substring(4, 6),
            16
        );


    return `rgba(${r}, ${g}, ${b}, ${alpha})`;

}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            1800
        );

}


/* =====================================================
   INITIALIZE
===================================================== */

document.getElementById(
    "datePicker"
).value =
    dateKey(
        selectedDate
    );


render();