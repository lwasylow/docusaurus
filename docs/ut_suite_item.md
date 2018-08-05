---
id: ut_suite_item
title: ut_suite_item
---

# UT_SUITE_ITEM




- [Variables](#variables)

- [Exceptions](#exceptions)

- [INIT Procedure](#init)
- [EXECUTION_TIME Function](#execution_time)



## Variables<a name="variables"></a>

Name | Code | Description
--- | --- | ---
object_owner | <pre>object_owner  varchar2(4000 byte),;</pre> | 
object_name | <pre>object_name   varchar2(4000 byte),;</pre> | 
name | <pre>name          varchar2(4000 byte),;</pre> | 
description | <pre>description   varchar2(4000 byte),;</pre> | 
path | <pre>path          varchar2(4000 byte),;</pre> | 
rollback_type | <pre>rollback_type integer(1),;</pre> | 



## Exceptions<a name="exceptions"></a>

Name | Code | Description
--- | --- | ---
object_owner | <pre>object_owner  varchar2(4000 byte),;</pre> | 
object_name | <pre>object_name   varchar2(4000 byte),;</pre> | 
name | <pre>name          varchar2(4000 byte),;</pre> | 
description | <pre>description   varchar2(4000 byte),;</pre> | 
path | <pre>path          varchar2(4000 byte),;</pre> | 
rollback_type | <pre>rollback_type integer(1),;</pre> | 




 
## INIT Procedure<a name="init"></a>


<p>
<p>utPLSQL - Version 3<br />  Copyright 2016 - 2017 utPLSQL Project</p><p>  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;):<br />  you may not use this file except in compliance with the License.<br />  You may obtain a copy of the License at</p><pre><code>  http://www.apache.org/licenses/LICENSE-2.0</code></pre><p>  Unless required by applicable law or agreed to in writing, software<br />  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br />  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br />  See the License for the specific language governing permissions and<br />  limitations under the License.</p>
</p>

### Syntax
```plsql
member procedure init(self in out nocopy ut_suite_item, a_object_owner varchar2, a_object_name varchar2, a_name varchar2)
```

 





 
## EXECUTION_TIME Function<a name="execution_time"></a>


<p>
<p>Returns execution time in seconds (with miliseconds)</p>
</p>

### Syntax
```plsql
member function execution_time return number,

not instantiable member function do_execute(self in out nocopy ut_suite_item) return boolean,
final member procedure do_execute(self in out nocopy ut_suite_item),
not instantiable member procedure calc_execution_result(self in out nocopy ut_suite_item),
not instantiable member procedure mark_as_errored(self in out nocopy ut_suite_item, a_error_stack_trace varchar2),
not instantiable member function get_error_stack_traces return ut_varchar2_list,
not instantiable member function get_serveroutputs return clob,
member procedure put_warning(self in out nocopy ut_suite_item, a_message varchar2)
)
not final not instantiable
/
```

 





 
