interface Time {
    hours: number,
    minutes: number,
    seconds: number
}

export interface Task {
    id: string,
    taskName: string,
    done: boolean,
    time: Time,
    isChecked?: boolean
}