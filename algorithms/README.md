# Algorithms in TypeScript

A comprehensive collection of algorithms and data structures implemented in TypeScript.

## Project Structure

```
algorithms/
│
├── README.md
├── package.json
├── tsconfig.json
├── src/
│   ├── arrays/
│   │   ├── two_sum.ts
│   │   ├── max_subarray.ts
│   │   └── README.md
│   │
│   ├── strings/
│   │   ├── palindrome.ts
│   │   ├── anagram.ts
│   │   └── README.md
│   │
│   ├── linked_list/
│   │   ├── reverse_linked_list.ts
│   │   ├── detect_cycle.ts
│   │   └── README.md
│   │
│   └── sorting/
│       ├── quick_sort.ts
│       ├── merge_sort.ts
│       └── README.md
│
└── tests/
    ├── test_two_sum.ts
    ├── test_max_subarray.ts
    └── ...
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Run tests:
   ```bash
   npm test
   ```

4. Run in development mode:
   ```bash
   npm run dev
   ```

## Available Algorithms

### Arrays
- **Two Sum**: Find two numbers that add up to a target value
- **Maximum Subarray**: Find the contiguous subarray with the largest sum

### Strings
- **Palindrome**: Check if a string is a palindrome
- **Anagram**: Check if two strings are anagrams

### Linked Lists
- **Reverse Linked List**: Reverse a singly linked list
- **Detect Cycle**: Detect if a linked list has a cycle

### Sorting
- **Quick Sort**: Implementation of quicksort algorithm
- **Merge Sort**: Implementation of merge sort algorithm

## Contributing

Feel free to add new algorithms or improve existing ones. Make sure to:
- Add proper TypeScript types
- Include time and space complexity analysis
- Write comprehensive tests
- Update the relevant README files
