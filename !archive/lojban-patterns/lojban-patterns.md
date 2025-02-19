# Lojban vs programming languages

## ACID

## CAP theorem

<https://en.wikipedia.org/wiki/CAP_theorem>

In theoretical computer science, the CAP theorem, also named Brewer's theorem after computer scientist Eric Brewer, states that any distributed data store can only provide two of the following three guarantees:[1][2][3]

Consistency
Every read receives the most recent write or an error.
Availability
Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
Partition tolerance
The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.
When a network partition failure happens, it must be decided whether to

cancel the operation and thus decrease the availability but ensure consistency or to
proceed with the operation and thus provide availability but risk inconsistency.
Thus, if there is a network partition, one has to choose between consistency and availability. Note that consistency as defined in the CAP theorem is quite different from the consistency guaranteed in ACID database transactions.[4]

Eric Brewer argues that the often-used "two out of three" concept can be somewhat misleading because system designers only need to sacrifice consistency or availability in the presence of partitions, but that in many systems partitions are rare.[5][6]

Explanation
No distributed system is safe from network failures, thus network partitioning generally has to be tolerated.[7][8] In the presence of a partition, one is then left with two options: consistency or availability. When choosing consistency over availability, the system will return an error or a time out if particular information cannot be guaranteed to be up to date due to network partitioning. When choosing availability over consistency, the system will always process the query and try to return the most recent available version of the information, even if it cannot guarantee it is up to date due to network partitioning.

In the absence of a partition, both availability and consistency can be satisfied.[9]

Database systems designed with traditional ACID guarantees in mind such as RDBMS choose consistency over availability, whereas systems designed around the BASE philosophy, common in the NoSQL movement for example, choose availability over consistency.[5]

## Patterns

## OOP

## Streams and dialogues

## Multimaster, mongo, pg

## LLVM

## Compilability of lojban

## Atomics, ordering

## Sealed classes like in kotlin

## Mocking in unit testing

## Heap vs stack

lo is stack
le is heap
## Boxes, references, recursive references, lu'i

<https://doc.rust-lang.org/book/ch15-01-box.html>

<https://stackoverflow.com/questions/31949579/understanding-and-relationship-between-box-ref-and?answertab=trending#tab-top>

## Mutexes and dialogues

<https://ru.wikipedia.org/wiki/%D0%9C%D1%8C%D1%8E%D1%82%D0%B5%D0%BA%D1%81#%D0%9F%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B_%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F>

## Entropy and dialogues

## CQRS

## Event sourcing

## B-tree

## differential equations example

### differential programming

## Why quantum computing: prime numbers search

### Quantum chess

## Algos in js and rust
