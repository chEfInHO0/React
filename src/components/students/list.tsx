import { Student } from "@/types/student";

type Props = {
  student: Student;
};

export const StudentList = ({ student }: Props) => {
  return (
    <tr className="text-center text-xs md:text-sm">
      <td className="py-2"></td>
      <td className="flex justify-start px-3">
        <div>
          <img
            className="w-6 h-6 rounded-full md:w-12 md:h-12"
            src={student.avatar}
            alt=""
          />
        </div>
        <div className="flex flex-col text-left ml-3">
          <p>{student.name}</p>
          <p>{student.email}</p>
        </div>
      </td>
      <td className="mx-auto">
        {student.active ? (
          <>
            <div className="inline-block w-4 h-4 border-2 rounded-full bg-green-500  md:hidden"></div>
            <span className="hidden rounded-full p-2 bg-green-500 md:inline-block ">
              active
            </span>
          </>
        ) : (
          <>
            <div className="inline-block h-4 w-4 border-2 rounded-full bg-red-500  md:hidden"></div>
            <span className="hidden rounded-full p-2 bg-red-500 md:inline-block ">
              inactive
            </span>
          </>
        )}
      </td>
      <td>{student.grade1}</td>
      <td>{student.grade2}</td>
      <td>
        {student.active
          ? ((student.grade1 + student.grade2) / 2).toFixed(1)
          : "-"}
      </td>
    </tr>
  );
};
