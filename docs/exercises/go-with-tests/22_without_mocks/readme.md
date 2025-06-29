Test doubles: Implementations in a SUT
Stubs: return the same data every time
Spies: like stubs but record how they act and are called
Mocks: respond with specific data to specific situations
Fakes: version of the dependency implemented in a way more suited to fast running reliable tests and local development

Contracts: allow us to create our implementations (fakes) and test it against the actual implementation

Contracts + Fakes = better DX (fast tests, easy to test, easy to notice problems in the contract)

> “One of the defining characteristics of high-performing teams in software development is their ability to make progress and to change their minds, without asking for permission from any person or group outside of their small team.”
