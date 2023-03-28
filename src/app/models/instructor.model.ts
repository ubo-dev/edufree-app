import Course from "./course.model";

export default interface Instructor
{
    name: string;
    lastName: string;
    email: string;
    password?: string;
    phoneNumber: string;
    university: string;
    department: string;
    description: string;
    courses: Course[];
}