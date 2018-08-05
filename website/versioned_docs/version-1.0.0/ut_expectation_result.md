---
id: version-1.0.0-ut_expectation_result
title: ut_expectation_result
original_id: ut_expectation_result
---

# UT_EXPECTATION_RESULT




- [Variables](#variables)

- [Exceptions](#exceptions)

- [UT_EXPECTATION_RESULT Function](#ut_expectation_result)



## Variables<a name="variables"></a>

Name | Code | Description
--- | --- | ---
status | <pre>status          integer(1),;</pre> | 
description | <pre>description     varchar2(32767),;</pre> | 
message | <pre>message         varchar2(32767),;</pre> | 



## Exceptions<a name="exceptions"></a>

Name | Code | Description
--- | --- | ---
status | <pre>status          integer(1),;</pre> | 
description | <pre>description     varchar2(32767),;</pre> | 
message | <pre>message         varchar2(32767),;</pre> | 




 
## UT_EXPECTATION_RESULT Function<a name="ut_expectation_result"></a>


<p>
<p>utPLSQL - Version 3<br />  Copyright 2016 - 2017 utPLSQL Project</p><p>  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;):<br />  you may not use this file except in compliance with the License.<br />  You may obtain a copy of the License at</p><pre><code>  http://www.apache.org/licenses/LICENSE-2.0</code></pre><p>  Unless required by applicable law or agreed to in writing, software<br />  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br />  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br />  See the License for the specific language governing permissions and<br />  limitations under the License.</p>
</p>

### Syntax
```plsql
constructor function ut_expectation_result(
  self in out nocopy ut_expectation_result, a_status integer, 
  a_description varchar2, a_message clob, a_include_caller_info boolean := true
) return self
```

 





 
