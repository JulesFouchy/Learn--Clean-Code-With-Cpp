// Run me with Deno https://deno.land/

import grader from './grader.ts'
import type { MaybeGrade } from './grader.ts'
import { assert } from "https://deno.land/std@0.99.0/testing/asserts.ts"

const is_valid_grade = (x: number) =>
      !isNaN(x) &&
      x >= 0 &&
      x <= 20

const are_equal = (a: number, b: number) => Math.abs(a-b) < 0.00001

const all_a:          MaybeGrade[] = ["A", "A", "A"]
const all_s:          MaybeGrade[] = ["S", "S", "S"]
const s_and_b:        MaybeGrade[] = ["S", "B"]
const a_and_b:        MaybeGrade[] = ["A", "B"]
const with_undefined: MaybeGrade[] = ["A", "A", "B", undefined]

const grading_situations = [
      all_a,
      all_s,
      s_and_b,
      a_and_b,
      with_undefined,
]

grading_situations.forEach(situation =>
      assert(is_valid_grade(grader(situation)), `[${situation}] doesn't produce a valid grade : "${grader(situation)}"`)
)

assert(are_equal(20, Math.round(grader(all_a))), `Expected 20, got ${grader(all_a)}`)
assert(are_equal(20, Math.round(grader(all_s))), `Expected 20, got ${grader(all_s)}`)
assert(are_equal(20, Math.round(grader(s_and_b))), `Expected 20, got ${grader(s_and_b)}`)
assert(!are_equal(20, Math.round(grader(a_and_b))))