val dogBrees = List("ab", "bc", "cd", "de")

for (breed <- dogBrees
  if breed.contains("b")
) println(breed)

for (breed <- dogBrees
  if breed.contains("b")
  if breed.contains("a")
) println(breed)

val filteredBreeds = for {
  breed <- dogBrees
  if breed.contains("b")
} yield breed


