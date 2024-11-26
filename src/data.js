export const data = [
    {
        title: 'Select Algorithm',
        description:(
            <p>You must select an algorithm before you can visualize it's execution on an array of numbers.
                <br></br><br></br>
                <em>Note:</em> Size of array and Execution speed cannot be changed if sorting is in progress. First select the parameters then click on "Generate New Array" button once sorting gets completed to apply changes.
            </p>
            

        ),
        worstCase: (
            <span>
            {/* O(n<sup>2</sup>) */}
            </span>
        ),
        avgCase: (
            <span>
            {/* O(n<sup>2</sup>) */}
            </span>
        ),
        bestCase: <span></span>,
        space: <span></span>
    },

    {
        title: 'Bubble Sort',
        
        description: (
            <p>
            <a
                href="https://www.geeksforgeeks.org/bubble-sort/"
                target="_blank"
                rel="noopener noreferrer"
                
            >
                <em><u><strong>Bubble Sort</strong></u></em>
            </a>{' '}
            is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represents the elements of the data structure.

            <p>The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.</p>

            <p>It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as Selection Sort or Insertion Sort perform better.</p>
            </p>
        ),
        worstCase: (
            <span>
            O(n<sup>2</sup>)
            </span>
        ),
        avgCase: (
            <span>
            O(n<sup>2</sup>)
            </span>
        ),
        bestCase: <span>O(n)</span>,
        space: <span>O(1)</span>
    },

    {
        title: 'Insertion Sort',
        description: (
            <p>
            <a
                href="https://www.geeksforgeeks.org/insertion-sort/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <em><u><strong>Insertion Sort</strong></u></em>
            </a>{' '}
            is a simple sorting algorithm that builds the final sorted array one item at a time. It's less performant than advanced sorting algorithms, but it can still have some advantages: it's really easy to implement and it's efficient on small data structures almost sorted.

            <p>The algorithm divides the data structure in two sublists: a sorted one, and one still to sort. Initially, the sorted sublist is made up of just one element and it gets progressively filled. For every iteration, the algorithm picks an element on the unsorted sublist and inserts it at the right place in the sorted sublist.</p>
            </p>
        ),
        worstCase: (
            <span>
            O(n<sup>2</sup>)
            </span>
        ),
        avgCase: (
            <span>
            O(n<sup>2</sup>)
            </span>
        ),
        bestCase: <span>O(n)</span>,
        space: <span>O(1)</span>
    },

    {
        title: 'Selection Sort',
        description: (
            <p>
            <a
                href="https://www.geeksforgeeks.org/selection-sort/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <em><u><strong>Selection Sort</strong></u></em>
            </a>{' '}
            is an in-place comparison sorting algorithm that divides the input
            list into two parts: the sublist of items already sorted, which is
            built up from left to right at the front (left) of the list, and
            the sublist of items remaining to be sorted that occupy the rest
            of the list. <p>Initially, the sorted sublist is empty and the
            unsorted sublist is the entire input list. The algorithm proceeds
            by finding the smallest element in the unsorted sublist,
            exchanging (swapping) it with the leftmost unsorted element
            (putting it in sorted order), and moving the sublist boundaries
            one element to the right.</p>
            </p>
        ),
        worstCase: (
            <span>
            O(n<sup>2</sup>)
            </span>
        ),
        avgCase: (
            <span>
            O(n<sup>2</sup>)
            </span>
        ),
        bestCase: (
            <span>
            O(n<sup>2</sup>)
            </span>
        ),
        space: <span>O(1)</span>
    },

    {
        title: 'Merge Sort',
        description: (
            <div>
            <p>
                <a
                href="https://www.geeksforgeeks.org/merge-sort/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <em><u><strong>Merge Sort</strong></u></em>
                </a>{' '}
                is an efficient, stable sorting algorith that makes use of the
                divide and conquer strategy. Conceptually the algorithm works as
                follows:
            </p>
            <ol>
                <li>
                Divide the unsorted list into <em>n</em> sublists, each
                containing one element(a list of one element is considered
                sorted)
                </li>
                <li>
                Repeatedly merge sublists to produce new sorted sublists until
                there is only one sublist remaining. This will be the sorted
                list.
                </li>
            </ol>
            </div>
        ),
        worstCase: (
            <span>
            O(<em>n</em> log <em>n</em>)
            </span>
        ),
        avgCase: (
            <span>
            O(<em>n</em> log <em>n</em>)
            </span>
        ),
        bestCase: (
            <span>
            O(<em>n</em> log <em>n</em>)
            </span>
        ),
        space: (
            <span>
            O(<em>n</em>)
            </span>
        )
    },

    {
        title: 'Quick Sort',
        description: (
            <div>
            <p>
                <a
                href="https://www.geeksforgeeks.org/quick-sort/"
                target="_blank"
                rel="noopener noreferrer"
                
                >
                <em><u><strong>Quick Sort</strong></u></em>
                
                </a>{' '}
                is an efficient, in-place sorting algorith that in practice is
                faster than MergeSort and HeapSort. However, it is not a stable
                sorting algorithm, meaning that the relative positioning of
                equal sort items is not preserved.Quicksort is a divide and
                conquer algorithm. Quicksort first divides a large array into
                two smaller sub-arrays: the low elements and the high elements.
                Quicksort can then recursively sort the sub-arrays. The steps
                are:
            </p>
            <ol>
                <li>
                Pick an element, called a pivot, from the array. This is
                usually done at random.
                </li>
                <li>Move pivot element to the start of the array.</li>
                <li>
                <em>Partitioning:</em> reorder the array so that all elements
                with values less than the pivot come before the pivot, while
                all elements with values greater than the pivot come after it
                (equal values can go either way). After this partitioning, the
                pivot is in its final position. This is called the{' '}
                <em>partition</em> operation.
                </li>
                <li>
                Recursively apply the above steps to the sub-array of elements
                with smaller values and separately to the sub-array of
                elements with greater values.
                </li>
            </ol>
            <p>
                The base case of the recursion is an array of size zero or one,
                which are sorted by definition.
            </p>
            </div>
        ),
        worstCase: (
            <span>
            O(<em>n</em>
            <sup>2</sup>)
            </span>
        ),
        avgCase: (
            <span>
            O(<em>n</em>log<em>n</em>)
            </span>
        ),
        bestCase: (
            <span>
            O(<em>n</em>log<em>n</em>)
            </span>
        ),
        space: (
            <span>
            O(log<em>n</em>)
            </span>
        )
    }

]