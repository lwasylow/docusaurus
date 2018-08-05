---
id: ut_executable
title: ut_executable
---

# UT_EXECUTABLE




- [Variables](#variables)

- [Exceptions](#exceptions)

- [UT_EXECUTABLE Function](#ut_executable)
- [IS_INVALID Function](#is_invalid)
- [DO_EXECUTE Function](#do_execute)



## Variables<a name="variables"></a>

Name | Code | Description
--- | --- | ---
begin | <pre>begin<br />  dbms_sql.parse(l_cursor_number, statement => l_statement, language_flag => dbms_sql.native);</pre> | 
 | <pre>  l_status := dbms_sql.execute(l_cursor_number);</pre> | 
end | <pre>    end if;</pre> | 
 | <pre>l_completed_without_errors := (self.error_stack||self.error_backtrace) is null;</pre> | 
end | <pre>end if;</pre> | 
end | <pre>    end if;</pre> | 
 | <pre>    l_end_transaction_id := dbms_transaction.local_transaction_id();</pre> | 
end | <pre>    end if;</pre> | 
return | <pre>    return l_completed_without_errors;</pre> | 
end | <pre>    <br />  end do_execute;</pre> | 



## Exceptions<a name="exceptions"></a>

Name | Code | Description
--- | --- | ---
begin | <pre>begin<br />  dbms_sql.parse(l_cursor_number, statement => l_statement, language_flag => dbms_sql.native);</pre> | 
 | <pre>  l_status := dbms_sql.execute(l_cursor_number);</pre> | 
end | <pre>    end if;</pre> | 
 | <pre>l_completed_without_errors := (self.error_stack||self.error_backtrace) is null;</pre> | 
end | <pre>end if;</pre> | 
end | <pre>    end if;</pre> | 
 | <pre>    l_end_transaction_id := dbms_transaction.local_transaction_id();</pre> | 
end | <pre>    end if;</pre> | 
return | <pre>    return l_completed_without_errors;</pre> | 
end | <pre>    <br />  end do_execute;</pre> | 




 
## UT_EXECUTABLE Function<a name="ut_executable"></a>


<p>
<p>utPLSQL - Version 3<br />  Copyright 2016 - 2017 utPLSQL Project</p><p>  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;):<br />  you may not use this file except in compliance with the License.<br />  You may obtain a copy of the License at</p><pre><code>  http://www.apache.org/licenses/LICENSE-2.0</code></pre><p>  Unless required by applicable law or agreed to in writing, software<br />  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br />  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br />  See the License for the specific language governing permissions and<br />  limitations under the License.</p>
</p>

### Syntax
```plsql
constructor function ut_executable(
  self in out nocopy ut_executable, a_owner varchar2, a_package varchar2,
  a_procedure_name varchar2, a_associated_event_name varchar2
) return self
```

 





 
## IS_INVALID Function<a name="is_invalid"></a>


<p>
<p>We will check if error raised because package was invalid if not we let it propagate.</p>
</p>

### Syntax
```plsql
member function is_invalid(self in out nocopy ut_executable) return boolean
```

 





 
## DO_EXECUTE Function<a name="do_execute"></a>


<p>
<p>executes the defines executable<br />returns true if executed without exceptions<br />returns false if exceptions were raised</p>
</p>

### Syntax
```plsql
member function do_execute(self in out nocopy ut_executable, a_item in out nocopy ut_suite_item) return boolean,
member function get_error_stack_trace return varchar2
) not final
/
```

 





 
