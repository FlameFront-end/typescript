type NestedNumbers = number | NestedNumbers[]

const nums: NestedNumbers = [1, 2, [1, 2, [1, 2, [1, 2]]]]

// JSON

type JSONPrimitive = string | number | boolean | null
type JSONObject = { [k: string]: JSONValue }
type JSONArray = JSONValue[]
type JSONValue = JSONPrimitive | JSONObject | JSONArray

function isJson(arg: JSONValue) {}

isJson('str')
isJson(1)
isJson({ a: [123], v: { x: 1 } })
isJson([1, { x: '' }])
