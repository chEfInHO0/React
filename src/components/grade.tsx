type Props = {
  grade: number;
};

export const Grade = ({ grade }: Props) => {
  const grades = ["💀", "😭", "😢", "🤔", "😎", "😍"];
  grade = Math.floor(grade);
  grade = grade > 5 ? 5 : grade;
  let emojiGrade = `${grades[grade]}`.repeat(grade);
  emojiGrade += `${grades[0]}`.repeat(5 - grade);

  return (
    <div>
      {grade} - {emojiGrade}
    </div>
  );
};
