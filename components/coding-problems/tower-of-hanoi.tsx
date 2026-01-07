import React, { useState } from 'react';
import { Play, RotateCcw, SkipForward, SkipBack } from 'lucide-react';
import { useThemeValue } from '@/components/theme-provider';

interface Rods {
  A: number[];
  B: number[];
  C: number[];
}

interface Move {
  disk: number;
  from: string;
  to: string;
  description: string;
  isLargest?: boolean;
}

const HanoiVisualizer = () => {
  const [n, setN] = useState(3);
  const [currentStep, setCurrentStep] = useState(0);
  const [moves, setMoves] = useState<Move[]>([]);
  const [rods, setRods] = useState<Rods>({ A: [], B: [], C: [] });
  const [isPlaying, setIsPlaying] = useState(false);
  const { theme } = useThemeValue();

  // Generate all moves
  const generateMoves = (
    disks: number,
    from: string,
    to: string,
    aux: string,
    moveList: Move[] = []
  ): Move[] => {
    if (disks === 1) {
      moveList.push({
        disk: 1,
        from,
        to,
        description: `Move disk 1 from ${from} to ${to}`,
      });
      return moveList;
    }

    // Step 1: Move n-1 disks from 'from' to 'aux' using 'to'
    generateMoves(disks - 1, from, aux, to, moveList);

    // Step 2: Move largest disk from 'from' to 'to'
    moveList.push({
      disk: disks,
      from,
      to,
      description: `Move disk ${disks} from ${from} to ${to}`,
      isLargest: true,
    });

    // Step 3: Move n-1 disks from 'aux' to 'to' using 'from'
    generateMoves(disks - 1, aux, to, from, moveList);

    return moveList;
  };

  // Apply move and get rod state
  const applyMove = (prevRods: Rods, move: Move): Rods => {
    const newRods = {
      A: [...prevRods.A],
      B: [...prevRods.B],
      C: [...prevRods.C],
    };

    const disk = newRods[move.from as keyof Rods].pop();
    newRods[move.to as keyof Rods].push(disk!);

    return newRods;
  };

  // Initialize
  const initialize = () => {
    const initialRods: Rods = {
      A: Array.from({ length: n }, (_, i) => n - i),
      B: [],
      C: [],
    };

    const allMoves = generateMoves(n, 'A', 'C', 'B');
    setMoves(allMoves);
    setRods(initialRods);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  React.useEffect(() => {
    initialize();
  }, [n]);

  // Calculate current state based on step
  React.useEffect(() => {
    if (moves.length === 0) return;

    let currentRods: Rods = {
      A: Array.from({ length: n }, (_, i) => n - i),
      B: [],
      C: [],
    };

    for (let i = 0; i < currentStep; i++) {
      currentRods = applyMove(currentRods, moves[i]);
    }

    setRods(currentRods);
  }, [currentStep, moves, n]);

  // Auto-play
  React.useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentStep < moves.length) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, moves.length]);

  const nextStep = () => {
    if (currentStep < moves.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const togglePlay = () => {
    if (currentStep >= moves.length) {
      setCurrentStep(0);
    }
    setIsPlaying(!isPlaying);
  };

  const getDiskColor = (size: number): string => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-red-500',
      'bg-purple-500',
      'bg-pink-500',
    ];
    return colors[size - 1] || 'bg-gray-500';
  };

  return (
    <div className='p-8 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen'>
      <h1 className='text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white'>
        Tower of Hanoi Visualizer
      </h1>
      <p className='text-center text-gray-600 dark:text-gray-300 mb-6'>
        Watch how recursion works step by step!
      </p>

      {/* Controls */}
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-700'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-4'>
            <label className='font-semibold text-gray-900 dark:text-white'>
              Number of disks:
            </label>
            <input
              type='number'
              min='1'
              max='6'
              value={n}
              onChange={(e) =>
                setN(Math.max(1, Math.min(6, parseInt(e.target.value) || 1)))
              }
              className='border border-gray-300 dark:border-gray-600 rounded px-3 py-2 w-20 bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
            />
          </div>

          <div className='flex gap-2'>
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className='p-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-50'
            >
              <SkipBack size={20} />
            </button>
            <button
              onClick={togglePlay}
              className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2'
            >
              {isPlaying ? (
                'Pause'
              ) : (
                <>
                  <Play size={20} /> Play
                </>
              )}
            </button>
            <button
              onClick={nextStep}
              disabled={currentStep >= moves.length}
              className='p-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-50'
            >
              <SkipForward size={20} />
            </button>
            <button
              onClick={initialize}
              className='px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 flex items-center gap-2'
            >
              <RotateCcw size={20} /> Reset
            </button>
          </div>
        </div>

        <div className='text-center text-lg'>
          <span className='font-semibold text-gray-900 dark:text-white'>
            Step {currentStep}
          </span>{' '}
          /{' '}
          <span className='text-gray-600 dark:text-gray-300'>
            {moves.length}
          </span>
          {currentStep > 0 && moves[currentStep - 1] && (
            <div className='mt-2 text-blue-600 dark:text-blue-400 font-medium'>
              {moves[currentStep - 1].description}
            </div>
          )}
        </div>
      </div>

      {/* Visualization */}
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-6 border border-gray-200 dark:border-gray-700'>
        {/* Desktop Visualization */}
        <div className='hidden lg:block'>
          <div
            className='flex justify-around items-end'
            style={{ height: '400px' }}
          >
            {(['A', 'B', 'C'] as const).map((rodName) => (
              <div
                key={rodName}
                className='flex flex-col items-center justify-end relative'
                style={{ width: '200px' }}
              >
                <div className='absolute bottom-0 flex flex-col-reverse items-center gap-1 mb-2'>
                  {rods[rodName].map((diskSize, idx) => (
                    <div
                      key={`${rodName}-${idx}`}
                      className={`${getDiskColor(
                        diskSize
                      )} rounded transition-all duration-300 flex items-center justify-center text-white font-bold`}
                      style={{
                        width: `${40 + diskSize * 25}px`,
                        height: '30px',
                      }}
                    >
                      {diskSize}
                    </div>
                  ))}
                </div>

                {/* Rod */}
                <div
                  className='w-2 bg-gray-700 dark:bg-gray-600 absolute bottom-0'
                  style={{ height: '300px' }}
                ></div>

                {/* Base */}
                <div className='w-48 h-3 bg-gray-700 dark:bg-gray-600 rounded'></div>

                {/* Label */}
                <div className='mt-4 text-2xl font-bold text-gray-700 dark:text-gray-300'>
                  Rod {rodName}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Text Representation */}
        <div className='lg:hidden'>
          <div className='space-y-4'>
            {(['A', 'B', 'C'] as const).map((rodName) => (
              <div
                key={rodName}
                className='border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-800'
              >
                <h3 className='font-bold text-lg mb-2 text-gray-900 dark:text-white'>
                  Rod {rodName}
                </h3>
                <div className='space-y-1'>
                  {rods[rodName].length === 0 ? (
                    <p className='text-gray-500 dark:text-gray-400 italic'>
                      Empty
                    </p>
                  ) : (
                    rods[rodName].map((diskSize, idx) => (
                      <div
                        key={`${rodName}-${idx}`}
                        className={`${getDiskColor(
                          diskSize
                        )} rounded px-3 py-1 text-white text-sm font-medium inline-block`}
                      >
                        Disk {diskSize}
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HanoiVisualizer;
