---
id: ut_test
title: ut_test
---

# UT_TEST




- [Variables](#variables)

- [Exceptions](#exceptions)

- [UT_TEST Function](#ut_test)



## Variables<a name="variables"></a>

Name | Code | Description
--- | --- | ---
before_each_list | <pre>before_each_list ut_executables,;</pre> | 
before_test_list | <pre>before_test_list ut_executables,;</pre> | 
item | <pre>item        ut_executable_test,;</pre> | 
after_test_list | <pre>after_test_list  ut_executables,;</pre> | 
after_each_list | <pre>after_each_list ut_executables,;</pre> | 
all_expectations | <pre>all_expectations    ut_expectation_results,;</pre> | 
failed_expectations | <pre>failed_expectations ut_expectation_results,;</pre> | 
parent_error_stack_trace | <pre>parent_error_stack_trace varchar2(4000),;</pre> | 



## Exceptions<a name="exceptions"></a>

Name | Code | Description
--- | --- | ---
before_each_list | <pre>before_each_list ut_executables,;</pre> | 
before_test_list | <pre>before_test_list ut_executables,;</pre> | 
item | <pre>item        ut_executable_test,;</pre> | 
after_test_list | <pre>after_test_list  ut_executables,;</pre> | 
after_each_list | <pre>after_each_list ut_executables,;</pre> | 
all_expectations | <pre>all_expectations    ut_expectation_results,;</pre> | 
failed_expectations | <pre>failed_expectations ut_expectation_results,;</pre> | 
parent_error_stack_trace | <pre>parent_error_stack_trace varchar2(4000),;</pre> | 




 
## UT_TEST Function<a name="ut_test"></a>


<p>
<p>utPLSQL - Version 3<br />  Copyright 2016 - 2017 utPLSQL Project</p><p>  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;):<br />  you may not use this file except in compliance with the License.<br />  You may obtain a copy of the License at</p><pre><code>  http://www.apache.org/licenses/LICENSE-2.0</code></pre><p>  Unless required by applicable law or agreed to in writing, software<br />  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br />  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br />  See the License for the specific language governing permissions and<br />  limitations under the License.</p>
</p>

### Syntax
```plsql
constructor function ut_test(
  self in out nocopy ut_test, a_object_owner varchar2 := null, a_object_name varchar2, a_name varchar2,
  a_expected_error_codes ut_integer_list := null
) return self
```

 





 
