
type Grade = "S" | "A" | "B" | "C" | "D"
type MaybeGrade = Grade | undefined

const grade_to_number = (grade: Grade) => {
      switch (grade) {
            case "D":
                  return 0
            case "C":
                  return 1
            case "B":
                  return 2
            case "A":
                  return 3
            case "S":
                  return 4
      }
}

const clamp = (x: number, min: number, max: number) => Math.min(Math.max(x, min), max)

const number_to_20 = (grade: number) => {
      return grade / 3 * 20
}

const harmonisation = (grade: number) => {
      return clamp(
            grade, 0, 20
      )
}

const average = (values: number[]) => {
      return values.reduce((acc, val) => acc + val, 0) / values.length
}

const is_not_undefined = (x: any) => x !== undefined

const maybe_grade_to_grade = (maybe_grade: MaybeGrade): Grade => {
      if (maybe_grade === undefined) {
            console.error("[maybe_grade_to_grade] Shouldn't happen !")
            return "D"
      }
      return maybe_grade
}

const compute_average_score = (maybe_grades: MaybeGrade[]) => {
      return harmonisation(average(
            maybe_grades
            .filter(is_not_undefined)
            .map(maybe_grade_to_grade)
            .map(grade_to_number)
            .map(number_to_20)
      ))
}

export default compute_average_score
export type { MaybeGrade }