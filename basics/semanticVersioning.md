### SEMANTIC VERSIONING
Semantic versioning is a versioning scheme for software that uses a three-part version number: MAJOR.MIOR.PATCH. Each part of the version number has a specific meaning:
- MAJOR version is incremented when there are incompatible API changes(breaking changes - a change in api that breaks existing code that was already working).
- MINOR version is incremented when new functionality is added in a backwards-compatible manner.
- PATCH version is incremented when backwards-compatible bug fixes are made.

# Symbols
- ^ : allows changes that do not modify the leftmost non-zero digit in the version number. For example, ^1.2.3 allows versions 1.2.3, 1.3.0 but not 2.0.0 (Minor OR Patch can change).
- ~ : allows patch-level changes
- * : allow any version
- ( > , < , >= , <=  ): define a range of versions

