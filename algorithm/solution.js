function totalOfArray(numbers)
{
    let result = 0
    
    for(let i=0; i<numbers.length; i++) result += numbers[i]
    
    return result
}

function findMin(numbers)
{
  let min = numbers[0]

  for(let i = 0; i<numbers.length; i++) min = numbers[i] <  min ? numbers[i] : min

  return min
}

function findMax(numbers)
{
  let max = numbers[0]

  for(let i = 0; i<numbers.length; i++) max = numbers[i] >  max ? numbers[i] : max

  return max
}

function findEvenElements(numbers)
{
	let elements = []
	
	for(let i=0; i<numbers.length; i++)
	{
		if(numbers[i] %2 == 0) elements.push(numbers[i])
	}

	return elements
}

function findOddElements(numbers)
{
	let elements = []
	
	for(let i=0; i<numbers.length; i++)
	{
		if(numbers[i] %2 == 1) elements.push(numbers[i])
	}

	return elements
}



function parseInputToNumbers(line)
{
    let strNumberArr = line.trim().split(' ')
    let intNumberArr = []
    
    for(let i=0; i<strNumberArr.length; i++) intNumberArr[i] = parseInt(strNumberArr[i])
    
    return intNumberArr
}

/*Ideal:
+ Minimum value by summing exactly four of the five integers: 
    Sum everything except max number
+ Maximum value by summing exactly four of the five integers: 
    Sum everything except min number
*/
function miniMaxSum(rawInput)
{
    let numbers = parseInputToNumbers(rawInput)
	let sum = totalOfArray(numbers)
	let minimunSum = sum - findMax(numbers)
	let maximumSum = sum - findMin(numbers)
	
    console.log(`${minimunSum} ${maximumSum}`)
}


// input is an string, sperate by space
miniMaxSum("1 3 5 7 9")