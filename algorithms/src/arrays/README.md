# Array Algorithms

This directory contains implementations of common array-based algorithms in TypeScript.

## Available Algorithms

### Two Sum
- **File**: `two_sum.ts`
- **Problem**: Find two numbers in an array that add up to a target value
- **Time Complexity**: O(n)
- **Space Complexity**: O(n)
- **Functions**:
  - `twoSum(nums: number[], target: number): number[]` - Using Map
  - `twoSumHash(nums: number[], target: number): number[]` - Using hash object

**Example Usage**:
```typescript
import { twoSum } from './two_sum';

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target); // [0, 1]
```

### Maximum Subarray (Kadane's Algorithm)
- **File**: `max_subarray.ts`
- **Problem**: Find the contiguous subarray with the largest sum
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)
- **Functions**:
  - `maxSubarray(nums: number[]): MaxSubarrayResult` - Returns detailed result
  - `maxSubarraySum(nums: number[]): number` - Returns only the maximum sum

**Example Usage**:
```typescript
import { maxSubarray, maxSubarraySum } from './max_subarray';

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubarray(nums);
// { maxSum: 6, startIndex: 3, endIndex: 6, subarray: [4, -1, 2, 1] }

const maxSum = maxSubarraySum(nums); // 6
```

## Interface Definitions

```typescript
interface MaxSubarrayResult {
  maxSum: number;
  startIndex: number;
  endIndex: number;
  subarray: number[];
}
```

## Testing

Run tests for array algorithms:
```bash
npm test -- --testPathPattern=arrays
```
