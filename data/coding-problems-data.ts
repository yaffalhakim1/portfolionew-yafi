export interface CodingProblemData {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  slug: string;
  solution: {
    language: string;
    code: string;
    explanation?: string;
  };
}

export const codingProblemsData: CodingProblemData[] = [
  {
    id: 'tower-of-hanoi',
    title: 'Tower of Hanoi',
    description:
      'Classic recursive problem visualization with step-by-step animation',
    difficulty: 'Medium',
    category: 'Recursion',
    slug: 'tower-of-hanoi',
    solution: {
      language: 'javascript',
      code: `function toh(N, from, to, aux) {
     // Base case: if only 1 disk, move it directly
    if (N === 1) {
        console.log("move disk " + 1 + " from rod " + from + " to rod " + to);
        return 1; // 1 move made
    }
    
    // Step 1: Move N-1 disks from 'from' to 'aux' using 'to' as auxiliary
    let moves = toh(N - 1, from, aux, to);
    
    // Step 2: Move the largest disk (Nth disk) from 'from' to 'to'
    console.log("move disk " + N + " from rod " + from + " to rod " + to);
    moves++; // Add 1 for this move
    
    // Step 3: Move N-1 disks from 'aux' to 'to' using 'from' as auxiliary
    moves += toh(N - 1, aux, to, from);
    
    return moves; // Return total number of moves
}`,
      explanation:
        'The recursive solution breaks down the problem into three steps: first move n-1 disks to the auxiliary rod, then move the largest disk to the target rod, and finally move the n-1 disks from auxiliary to target rod. Each recursive call reduces the problem size until we reach the base case of moving just one disk.',
    },
  },
];

export function getProblemBySlug(slug: string): CodingProblemData | undefined {
  return codingProblemsData.find((problem) => problem.slug === slug);
}

export function getDifficultyColor(
  difficulty: CodingProblemData['difficulty']
): string {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-800';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'Hard':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}
